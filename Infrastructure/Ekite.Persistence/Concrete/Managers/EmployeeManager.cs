using AutoMapper;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Ekite.Application.DTOs.DirectorDto;
using Ekite.Application.DTOs.EmployeeDto;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using Ekite.Persistence.Concrete.Repositories;
using Ekite.Persistence.Context;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Concrete.Managers
{
    public class EmployeeManager : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IMapper _mapper;
        private readonly IAppUserService appUserService;
        private readonly IDirectorService _directorService;

        public EmployeeManager(IEmployeeRepository employeeRepository, IMapper mapper, IAppUserService appUserService, IDirectorService directorService)
        {
            _employeeRepository = employeeRepository;
            _mapper = mapper;
            this.appUserService = appUserService;
            _directorService = directorService;
        }

        public Task<List<Employee>> TGetAll(Expression<Func<Employee, bool>> expression = null)
        {
            return _employeeRepository.GetAll(expression);
        }

        public async Task<bool> TCreate(CreateEmployeeDto entity)
        {
            if (entity != null)
            {
                string employeeAppUserId = await appUserService.RegisterEmployee(entity.FirstName, entity.LastName);
                if (employeeAppUserId == null)
                {
                    return false;
                }
                else
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

                    Employee employee = _mapper.Map<Employee>(entity);
                    employee.AppUserId = employeeAppUserId;
                    return await _employeeRepository.Create(employee);
                }


            }
            else
            {
                return false;
            }
        }

        public async Task<Employee> TGetByExpression(Expression<Func<Employee, bool>> expression)
        {
            return await _employeeRepository.GetByExpression(expression);
        }

        public async Task<Employee> TGetById(int id)
        {

            return await _employeeRepository.GetById(id);

        }

        public async Task<bool> THardDelete(Employee entity)
        {
            if (entity != null)
            {

                return await _employeeRepository.HardDelete(entity);
            }
            else
            {
                return false;

            }
        }

        public async Task<bool> TSoftDelete(Employee entity)
        {
            if (entity != null)
            {

                return await _employeeRepository.SoftDelete(entity);

            }
            else
            {
                return false;

            }
        }

        public async Task<bool> TUpdate(int id, UpdateEmployeeDto entity)
        {
            Employee employee = await _employeeRepository.GetById(id);

            if (employee != null)
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

                _mapper.Map(entity, employee);

                return await _employeeRepository.Update(employee);
            }
            else
            {
                return false;
            }
        }

        public async Task<bool> TUpdateWithoutStatus(Employee entity)
        {
            if (entity != null)
            {
                return await _employeeRepository.UpdateWithoutStatus(entity);
            }
            else
            {
                return false;
            }

        }

        public Task<Employee> TGetFilteredInclude(Expression<Func<Employee, bool>> expression = null, Func<IQueryable<Employee>, IIncludableQueryable<Employee, object>> include = null)
        {
            return _employeeRepository.GetFilteredInclude(expression, include);
        }

        public async Task<ResultSumEmployeeDto> GetSumEmployee(int id)
        {

            if (id > 0)
            {
                ResultSumEmployeeDto resultSum = await _employeeRepository.GetFilteredFirstOrDefault(select: x => new ResultSumEmployeeDto
                {
                    FirstName = x.FirstName,
                    LastName = x.LastName,
                    SecondLastName = x.SecondLastName,
                    SecondName = x.SecondName,
                    Address = x.Address,
                    DepartmentName = x.Department.Name,
                    JobName = x.Job.Name,
                    Email = x.AppUser.Email,
                    PhoneNumber = x.PhoneNumber,
                }, where: x => x.Id == id && x.Status != Status.Passive, include: q => q.Include(x => x.AppUser).Include(x => x.Department).Include(x => x.Job));
                return resultSum;

            }
            else
            {
                return null;
            }

        }

        public async Task<ResultDetailEmployeeDto> GetDetailEmployee(int id)
        {
            if (id > 0)
            {

                ResultDetailEmployeeDto resultSum = await _employeeRepository.GetFilteredFirstOrDefault(select: x => new ResultDetailEmployeeDto
                {
                    FirstName = x.FirstName,
                    LastName = x.LastName,
                    SecondLastName = x.SecondLastName,
                    SecondName = x.SecondName,
                    Address = x.Address,
                    DepartmentName = x.Department.Name,
                    JobName = x.Job.Name,
                    Email = x.AppUser.Email,
                    PhoneNumber = x.PhoneNumber,
                    BirthDate = x.BirthDate,
                    BirthPlace = x.BirthPlace,
                    CompanyName = x.Company.Name,
                    HireDate = x.HireDate,
                    ImagePath = x.ImagePath,
                    LeavingDate = x.LeavingDate,
                    TCNO = x.TCNO,
                }, where: x => x.Id == id && x.Status != Status.Passive, include: q => q.Include(x => x.AppUser).Include(x => x.Department).Include(x => x.Job));

                return resultSum;
            }
            else
            {
                return null;
            }
        }


        public async Task<UpdateEmployeeDto> GetUpdateEmployee(int id)
        {

            if (id > 0)
            {
                UpdateEmployeeDto resultSum = await _employeeRepository.GetFilteredFirstOrDefault(select: x => new UpdateEmployeeDto
                {
                    AddressDetail = x.AddressDetail,
                    City = x.City,
                    District = x.District,
                    ImagePath = x.ImagePath,
                    PhoneNumber = x.PhoneNumber

                }, where: x => x.Id == id && x.Status != Status.Passive);
                return resultSum;
            }
            else
            {
                return null;
            }
        }

        public async Task<int> GetEmployeeIdByUserId(string id)
        {
            Employee employee = await _employeeRepository.GetFilteredInclude(x => x.AppUserId == id);


            if (employee == null)
            {
                return 0;
            }
            else
            {
                return employee.Id;
            }
        }

        public async Task<List<AllListEmployeeDto>> GetAllEmployee(int id)
        {
            ResultDetailDirectorDto director = await _directorService.GetDetailDirector(id);
            List<AllListEmployeeDto> resultSum = await _employeeRepository.GetFilteredList(select: x => new AllListEmployeeDto
            {
                FullName = (x.FirstName + " " + x.SecondName).Trim(' ') + " " + (x.LastName + " " + x.SecondName).Trim(' '),
                BirthDate = x.BirthDate,
                BirthPlace = x.BirthPlace,
                Department = x.Department.Name,
                EmployeeID = x.Id,
                Job = x.Job.Name

            }, where: x => x.Status != Status.Passive && x.Company.Name == director.CompanyName, include: q => q.Include(x => x.AppUser).Include(x => x.Department).Include(x => x.Job).Include(x => x.Company));


            return resultSum;


        }

        public async Task<ResultAllDetailEmployeeDto> GetAllDetailEmployee(int id)
        {

            if (id > 0)
            {

                ResultAllDetailEmployeeDto resultSum = await _employeeRepository.GetFilteredFirstOrDefault(select: x => new ResultAllDetailEmployeeDto
                {
                    FirstName = x.FirstName,
                    LastName = x.LastName,
                    SecondLastName = x.SecondLastName,
                    SecondName = x.SecondName,
                    Address = x.Address,
                    DepartmentName = x.Department.Name,
                    JobName = x.Job.Name,
                    Email = x.AppUser.Email,
                    PhoneNumber = x.PhoneNumber,
                    BirthDate = x.BirthDate,
                    BirthPlace = x.BirthPlace,
                    CompanyName = x.Company.Name,
                    HireDate = x.HireDate,
                    ImagePath = x.ImagePath,
                    LeavingDate = x.LeavingDate,
                    TCNO = x.TCNO,
                    Salary = x.Salary,

                }, where: x => x.Id == id && x.Status != Status.Passive, include: q => q.Include(x => x.AppUser).Include(x => x.Department).Include(x => x.Job));

                return resultSum;
            }
            else
            {
                return null;
            }
        }
    }
}
