using AutoMapper;
using Ekite.Application.DTOs.DirectorDto;
using Ekite.Application.DTOs.SiteOwnerDto;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Persistence.Concrete.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Concrete.Managers
{
    public class SiteOwnerManager : ISiteOwnerService
    {
        private readonly ISiteOwnerRepository siteOwnerRepository;
        private readonly IMapper mapper;

        public SiteOwnerManager(ISiteOwnerRepository siteOwnerRepository,IMapper mapper)
        {
            this.siteOwnerRepository = siteOwnerRepository;
            this.mapper = mapper;
        }

        public async Task<ResultDetailSiteOwner> GetDetailSiteOwner(int id)
        {
            if (id > 0)
            {
                ResultDetailSiteOwner resultSum = await siteOwnerRepository.GetFilteredFirstOrDefault(select: x => new ResultDetailSiteOwner
                {
                    FirstName = x.FirstName,
                    LastName = x.LastName,
                    SecondLastName = x.SecondLastName,
                    SecondName = x.SecondName,
                    Address = x.Address,
                    JobName = x.Job.Name,
                    Email = x.AppUser.Email,
                    PhoneNumber = x.PhoneNumber,
                    BirthDate = x.BirthDate,
                    BirthPlace = x.BirthPlace,
                    HireDate = x.HireDate,
                    ImagePath = x.ImagePath,
                    LeavingDate = x.LeavingDate,
                    TCNO = x.TCNO,
                }, where: x => x.Id == id && x.Status != Domain.Enums.Status.Passive, include: q => q.Include(x => x.AppUser).Include(x => x.Job));

                return resultSum;
            }
            else
            {
                return null;
            }
        }

        public async Task<ResultSumSiteOwnerDto> GetSumSiteOwner(int id)
        {
            if (id > 0)
            {
                ResultSumSiteOwnerDto resultSum = await
                    siteOwnerRepository.GetFilteredFirstOrDefault(select: x => new ResultSumSiteOwnerDto
                    {
                        FirstName = x.FirstName,
                        LastName = x.LastName,
                        SecondLastName = x.SecondLastName,
                        SecondName = x.SecondName,
                        Address = x.Address,
                        JobName = x.Job.Name,
                        Email = x.AppUser.Email,
                        PhoneNumber = x.PhoneNumber,
                    }, where: x => x.Id == id && x.Status != Domain.Enums.Status.Passive, include: q => q.Include(x => x.AppUser).Include(x => x.Job));
                return resultSum;

            }
            else
            {
                return null;
            }
        }

        public async Task<UpdateSiteOwnerDto> GetUpdateSiteOwner(int id)
        {
            if (id > 0)
            {
                UpdateSiteOwnerDto resultSum = await siteOwnerRepository.GetFilteredFirstOrDefault(select: x => new UpdateSiteOwnerDto
                {
                    AddressDetail = x.AddressDetail,
                    City = x.City,
                    District = x.District,
                    ImagePath = x.ImagePath,
                    PhoneNumber = x.PhoneNumber

                }, where: x => x.Id == id && x.Status != Domain.Enums.Status.Passive);

                return resultSum;
            }
            else
            {
                return null;
            }
        }
    }
}
