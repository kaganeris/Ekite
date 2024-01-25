using AutoMapper;
using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs;
using Ekite.Application.DTOs.DirectorDto;
using Ekite.Application.DTOs.SiteOwnerDto;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
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

        public async Task<bool> TUpdate(int id, UpdateSiteOwnerDto entity)
        {
            SiteOwner siteOwner = await siteOwnerRepository.GetById(id);

            if (siteOwner != null)
            {
                if (entity.UploadPath != null)
                {
                    string fileExtension = Path.GetExtension(entity.UploadPath.FileName);

                    using MemoryStream fileUploadStream = new MemoryStream();

                    entity.UploadPath.CopyTo(fileUploadStream);
                    fileUploadStream.Position = 0;

                    string connectionString = "DefaultEndpointsProtocol=https;AccountName=ekitedepo;AccountKey=vSKMkCAXSsLU58GHf/rSoaSbK05OOnuQmh2kPKO8Go2kIh4a6WmYDnro27Cg24Fv9bNyYiRCpOGG+AStSG8pyA==;EndpointSuffix=core.windows.net";
                    string blobContainerName = "yeni";

                    BlobContainerClient blobContainerClient = new BlobContainerClient(connectionString, blobContainerName);

                    var uniqueName = Guid.NewGuid().ToString() + fileExtension;

                    BlobClient blobClient = blobContainerClient.GetBlobClient(uniqueName);

                    blobClient.Upload(fileUploadStream, new BlobUploadOptions()
                    {

                        HttpHeaders = new BlobHttpHeaders
                        {

                            ContentType = "image/bitmap"
                        }
                    }, cancellationToken: default);

                    entity.ImagePath = $"https://ekitedepo.blob.core.windows.net/yeni/{uniqueName}";
                }

                mapper.Map(entity, siteOwner);

                return await siteOwnerRepository.Update(siteOwner);
            }
            else
            {
                return false;
            }
        }
    }
}
