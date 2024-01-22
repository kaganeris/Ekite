using Ekite.Application.Interfaces.IRepositories;
using Ekite.Domain.Entities;
using Ekite.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Concrete.Repositories
{
    public class SiteOwnerRepository : BaseRepository<SiteOwner>, ISiteOwnerRepository
    {
        public SiteOwnerRepository(AppDbContext appDbContext) : base(appDbContext)
        {

        }
    }
}
