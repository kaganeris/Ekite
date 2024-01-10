using Ekite.Application.Interfaces.IRepositories;
using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using Ekite.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Concrete.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class, IBaseEntity
    {
        private readonly AppDbContext _appDbContext;
        protected DbSet<T> _table;
        public BaseRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
            _table = _appDbContext.Set<T>();
        }

        public async Task<T> GetById(int id)
        {

            try
            {
                return await _table.FindAsync(id);

            }
            catch (Exception)
            {

                return null;
            }

        }




        public async Task<T> GetByExpression(Expression<Func<T, bool>> expression)
        {
            return await _table.AsNoTracking().FirstOrDefaultAsync(expression);
        }

        public async Task<bool> Create(T entity)
        {

            try
            {
                entity.CreatedDate = DateTime.Now;
                entity.Status = Status.Active;
                await _table.AddAsync(entity);
                return await SaveChange() > 0;

            }
            catch (Exception)
            {
                return false;
            }

        }


        public async Task<bool> Update(T entity)
        {
            try
            {
                entity.UpdatedDate = DateTime.Now;
                entity.Status = Status.Modified;
                _table.Update(entity);
                return await SaveChange() > 0;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<bool> UpdateWithoutStatus(T entity)
        {

            try
            {
                _table.Update(entity);
                return await SaveChange() > 0;
            }
            catch (Exception)
            {

                return false;
            }

        }

        public async Task<bool> HardDelete(T entity)
        {
            try
            {
                _table.Remove(entity);
                return await SaveChange() > 0;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<bool> SoftDelete(T entity)
        {
            try
            {
                entity.DeletedDate = DateTime.Now;
                entity.Status = Status.Passive;
                _table.Update(entity);
                return await SaveChange() > 0;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<List<T>> GetAll(Expression<Func<T, bool>> expression = null)
        {
            if (expression == null)
            {
                return await _table.AsNoTracking().ToListAsync();
            }
            else
            {
                return await _table.AsNoTracking().Where(expression).ToListAsync();
            }
        }


        public async Task<TResult> GetFilteredFirstOrDefault<TResult>(Expression<Func<T, TResult>> select = null, Expression<Func<T, bool>> where = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {

            IQueryable<T> query = _table;  // SELECT * FROM Post gibi...

            if (include != null)  // JOIN İŞLEMİ
            {
                query = include(query);
            }

            if (where != null) // SELECT * FOM Post WHERE Status = 1 gibi...
            {
                query = query.Where(where);
            }

            if (orderBy != null)
            {
                return await orderBy(query).Select(select).FirstOrDefaultAsync();

            }

            var result = await query.Select(select).FirstOrDefaultAsync();

            return result;


        }

        public async Task<List<TResult>> GetFilteredList<TResult>(Expression<Func<T, TResult>> select = null, Expression<Func<T, bool>> where = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {
            IQueryable<T> query = _table; // SELECT * FROM Post gibi...

            if (where != null)   // SELECT * FOM Post WHERE Status = 1 gibi...
            {
                query = query.Where(where);
            }

            if (include != null)
            {
                query = include(query); // JOIN İŞLEMİ
            }


            if (orderBy != null)  // Sıralama işlemi varsa sıralayıp return edecek yoksa sıralamadan query'i sorgulayıop sonucu liste şeklinde return edecek.
            {

                return await orderBy(query).Select(select).ToListAsync();
            }

            var result = await query.Select(select).ToListAsync();

            return result;
        }


        public async Task<T> GetFilteredInclude(Expression<Func<T, bool>> expression = null, Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null)
        {
            IQueryable<T> query = _table;

            if (expression != null)
            {
                query = query.Where(expression);
            }
            if (include != null)
            {
                query = include(query);

            }



            return await query.FirstOrDefaultAsync();


        }




        public async Task<int> SaveChange()
        {
            return await _appDbContext.SaveChangesAsync();

        }



    }
}
