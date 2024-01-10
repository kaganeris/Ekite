using Ekite.Application.DTOs.AdvanceDto;
using Ekite.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Interfaces.Services
{
    public interface IAdvanceService 
    {

        
        Task<bool> TCreate(CreateAdvanceDTO createAdvanceDTO);
        Task<bool> THardDelete(int id );
        Task<bool> TUpdate(int id,UpdateAdvanceDTO updateAdvanceDTO);
        Task<Advance> TGetById(int id);
        Task<List<ResultAdvanceDTO>> TGetAll(Expression<Func<Advance, bool>> expression);

        Task<UpdateAdvanceDTO> GetUpdateAdvance(int id);

    }
}
