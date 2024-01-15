using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs;
using Ekite.Application.DTOs.DirectorDto;
using Ekite.Application.DTOs.EmployeeDto;
using Ekite.Application.DTOs.LeaveDto;
using Ekite.Application.Helpers;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using Ekite.Persistence.Concrete.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;

namespace Ekite.Persistence.Concrete.Managers
{
	public class DirectorManager : IDirectorService
	{
		private readonly IDirectorRepository _directorRepository;
		private readonly ILeaveRepository _leaveRepository;
        private readonly IMapper mapper;

        public DirectorManager(IDirectorRepository directorRepository, ILeaveRepository leaveRepository,IMapper mapper)
		{
			_directorRepository = directorRepository;
			_leaveRepository = leaveRepository;
            this.mapper = mapper;
        }

		public async Task<bool> ApproveLeave(int id)
		{
			if (id > 0)
			{

				Leave leave = await _leaveRepository.GetById(id);
				leave.ApprovalStatus = ApprovalStatus.Approved;
				leave.ApprovedDate = DateTime.Now;

				return await _leaveRepository.UpdateWithoutStatus(leave);			}
			else
			{
				return false;
			}
		}

		public async Task<ResultDetailDirectorDto> GetDetailDirector(int id)
		{
			if (id > 0)
			{
				ResultDetailDirectorDto resultSum = await _directorRepository.GetFilteredFirstOrDefault(select: x => new ResultDetailDirectorDto
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

		public async Task<int> GetDirectorIdByUserId(string id)
		{
			Director director= await _directorRepository.GetFilteredInclude(x => x.AppUserId == id);
			if (director == null)
			{
				return 0;
			}
			else
			{
				return director.Id;
			}
		}

		public async Task<List<ResultPendingLeaveDTO>> GetPendingList()
		{
			List<ResultPendingLeaveDTO> resultList = await _leaveRepository.GetFilteredList(select: x => new ResultPendingLeaveDTO
			{
				Id = x.Id,
				Day = x.Day,
				LeaveEndDate = x.LeaveEndDate,
				LeaveStartDate = x.LeaveStartDate,
				LeaveType = EnumDescriber.Description(x.LeaveType),
				FullName = x.Employee.FullName,

			}, where: x => x.ApprovalStatus == ApprovalStatus.Pending, include: q => q.Include(x => x.Employee));
			return resultList;
		}

		public async Task<ResultSumDirectorDto> GetSumDirector(int id)
		{			
			if (id > 0)
			{
				ResultSumDirectorDto resultSum = await
					_directorRepository.GetFilteredFirstOrDefault(select: x => new ResultSumDirectorDto
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

		public async Task<UpdateDirectorDto> GetUpdateDirector(int id)
		{
			if (id > 0)
			{
				UpdateDirectorDto resultSum = await _directorRepository.GetFilteredFirstOrDefault(select: x => new UpdateDirectorDto
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

		public async Task<bool> RejectLeave(int id)
		{
			if (id > 0)
			{

				Leave leave = await _leaveRepository.GetById(id);
				leave.ApprovalStatus = ApprovalStatus.Rejected;
				leave.ApprovedDate = DateTime.Now;
				return await _leaveRepository.UpdateWithoutStatus(leave);

			}
			else
			{
				return false;
			}
		}

		public async Task<bool> TCreate(Director entity)
		{
			if (entity != null)
			{
				return await _directorRepository.Create(entity);
			}
			else
			{
				return false;
			}
		}


		public async Task<bool> TUpdate(int id, UpdateDirectorDto entity)
		{
			Director director= await _directorRepository.GetById(id);

			if (director != null)
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

                mapper.Map(entity, director);

				return await _directorRepository.Update(director);
			}
			else
			{
				return false;
			}
		}

		
	}
}
