using AutoMapper;
using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs;
using Ekite.Application.DTOs.SpendDto;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using Microsoft.Extensions.DependencyInjection;
using SixLabors.ImageSharp.Advanced;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Ekite.Application.DTOs.LeaveDto;
using Ekite.Persistence.Concrete.Repositories;
using Ekite.Application.Helpers;
using Microsoft.EntityFrameworkCore;

namespace Ekite.Persistence.Concrete.Managers
{
	public class SpendManager : ISpendService
	{
		
		private readonly ISpendRepository _spendRepository;
		private readonly IMapper _mapper;
		private readonly IEmployeeRepository _employeeRepository;

		public SpendManager(ISpendRepository spendRepository, IMapper mapper, IEmployeeRepository employeeRepository)
        {
			_spendRepository = spendRepository;
			_mapper = mapper;
			_employeeRepository = employeeRepository;
		}

		public async Task<bool> ApproveSpend(int id)
		{
			if (id > 0)
			{

				Spend spend= await _spendRepository.GetById(id);
				spend.ApprovalStatus = ApprovalStatus.Approved;
				spend.ApprovedDate = DateTime.Now;

				return await _spendRepository.UpdateWithoutStatus(spend);

			}
			else
			{
				return false;
			}
		}

		public async Task<List<ResultApprovedSpendDTO>> GetApprovedList()
		{
			List<ResultApprovedSpendDTO> resultList = await _spendRepository.GetFilteredList(select: x => new ResultApprovedSpendDTO
			{
				Id = x.Id,			
				SpendType = EnumDescriber.Description(x.SpendType),
				FullName = x.Employee.FullName,
				ApprovalStatus = EnumDescriber.Description(x.ApprovalStatus),
				ApprovedDate = x.ApprovedDate,
				CreatedDate = x.CreatedDate,
				Price = x.Amount,
				Currency = EnumDescriber.Description(x.Currency),
				ImagePath = x.ImagePath,
				Description = x.Description
			}, where: x => x.ApprovalStatus == ApprovalStatus.Approved, include: q => q.Include(x => x.Employee));

			return resultList;
		}

		public async Task<List<ResultPendingSpendDTO>> GetPendingList()
		{
			List<ResultPendingSpendDTO> resultList = await _spendRepository.GetFilteredList(select: x => new ResultPendingSpendDTO
			{
				Id = x.Id,				
				SpendType = EnumDescriber.Description(x.SpendType),
				FullName = x.Employee.FullName,
				ApprovalStatus = EnumDescriber.Description(x.ApprovalStatus),
				CreatedDate = x.CreatedDate,
				Price=x.Amount,
				Currency = EnumDescriber.Description(x.Currency),
				ImagePath=x.ImagePath,
				Description=x.Description

		}, where: x => x.ApprovalStatus == ApprovalStatus.Pending, include: q => q.Include(x => x.Employee));;

			return resultList;
		}

		public async Task<List<ResultRejectSpendDTO>> GetRejectList()
		{
			List<ResultRejectSpendDTO> resultList = await _spendRepository.GetFilteredList(select: x => new ResultRejectSpendDTO
			{
				Id = x.Id,				
				SpendType = EnumDescriber.Description(x.SpendType),
				FullName = x.Employee.FullName,
				ApprovalStatus = EnumDescriber.Description(x.ApprovalStatus),
				ApprovedDate = x.ApprovedDate,
				CreatedDate = x.CreatedDate,
				Price = x.Amount,
				Currency = EnumDescriber.Description(x.Currency),
				ImagePath = x.ImagePath,
				Description = x.Description

			}, where: x => x.ApprovalStatus == ApprovalStatus.Rejected, include: q => q.Include(x => x.Employee));

			return resultList;
		}

		public async Task<bool> RejectSpend(int id)
		{
			if (id > 0)
			{

				Spend spend= await _spendRepository.GetById(id);
				spend.ApprovalStatus = ApprovalStatus.Rejected;
				spend.ApprovedDate = DateTime.Now;
				return await _spendRepository.UpdateWithoutStatus(spend);
			}
			else
			{
				return false;
			}
		}

		public async Task<bool> TCreate(CreateSpendDto createSpendDto)
		{
			if ( await _employeeRepository.GetById(createSpendDto.EmployeeId) != null)
			{
				if(createSpendDto.UploadPath != null)
				{
                    string fileExtension = Path.GetExtension(createSpendDto.UploadPath.FileName);

                    using MemoryStream fileUploadStream = new MemoryStream();

                    createSpendDto.UploadPath.CopyTo(fileUploadStream);
                    fileUploadStream.Position = 0;

                    string connectionString = "DefaultEndpointsProtocol=https;AccountName=ekitedepo;AccountKey=vSKMkCAXSsLU58GHf/rSoaSbK05OOnuQmh2kPKO8Go2kIh4a6WmYDnro27Cg24Fv9bNyYiRCpOGG+AStSG8pyA==;EndpointSuffix=core.windows.net";
                    string blobContainerName = "yeni";


                    BlobContainerClient blobContainerClient = new BlobContainerClient(connectionString, blobContainerName);

                    var uniqueName = Guid.NewGuid().ToString() + fileExtension;

                    BlobClient blobClient = blobContainerClient.GetBlobClient(uniqueName);

                    string contentType = "";

                    if (fileExtension == ".pdf")
                    {
                        contentType = "application/pdf";
                    }
                    else
                    {
                        contentType = $"image/{fileExtension.Substring(1)}";
                    }
                    blobClient.Upload(fileUploadStream, new BlobUploadOptions()
                    {

                        HttpHeaders = new BlobHttpHeaders
                        {
                            ContentType = contentType
                        }
                    }, cancellationToken: default);


                    createSpendDto.ImagePath = $"https://ekitedepo.blob.core.windows.net/yeni/{uniqueName}";
                }


				Spend spend = _mapper.Map<Spend>(createSpendDto);
				spend.ApprovalStatus = ApprovalStatus.Pending;
				return await _spendRepository.Create(spend);
			}
			else
			{
				return false;
			}
		}

		

		public async Task<List<ResultSpendDto>> TGetAll(Expression<Func<Spend, bool>> expression = null)
		{
			if (expression != null)
			{
				 List<ResultSpendDto> listAdvance = _mapper.Map<List<ResultSpendDto>>(await _spendRepository.GetAll(expression));
				return listAdvance;	

			}
			else
			{
				return null;
			}
		}

		public async Task<Spend> TGetById(int id)
		{
			if (id>0)
			{
				return await _spendRepository.GetById(id);	
			}
			else
			{
				return null;
			}
		}

		public async Task<UpdateSpendDto> TGetUpdateSpend(int id)
		{
			if (id>0)
			{

				UpdateSpendDto updateSpendDto = await _spendRepository.GetFilteredFirstOrDefault(select: x => new UpdateSpendDto
				{
					Id=x.Id,
					Amount = x.Amount,
					Currency = x.Currency,
					
					Description = x.Description,
					
					ImagePath=x.ImagePath,
					EmployeeId=x.EmployeeId,
					SpendType= x.SpendType,

				}, where: x => x.Id == id); 
				return updateSpendDto;	

			}
			else
			{
				return null;
			}
		}

		public async Task<bool> THardDelete(int id)
		{
			try
			{
				if (id>0)
				{
					Spend spend = await _spendRepository.GetByExpression(x => x.ApprovalStatus == ApprovalStatus.Pending &&  x.Id ==id);

					if (spend !=null)
					{
						return await _spendRepository.HardDelete(spend);

					}
					else
					{
						return false;	
					}
				}
				return false;
			}
			catch (Exception)
			{

				throw;
			}
		}

		public async Task<bool> TUpdate(UpdateSpendDto updateSpendDto)
		{
			try
			{
                if (updateSpendDto.UploadPath != null)
                {
                    string fileExtension = Path.GetExtension(updateSpendDto.UploadPath.FileName);

                    using MemoryStream fileUploadStream = new MemoryStream();

                    updateSpendDto.UploadPath.CopyTo(fileUploadStream);
                    fileUploadStream.Position = 0;

                    string connectionString = "DefaultEndpointsProtocol=https;AccountName=ekitedepo;AccountKey=vSKMkCAXSsLU58GHf/rSoaSbK05OOnuQmh2kPKO8Go2kIh4a6WmYDnro27Cg24Fv9bNyYiRCpOGG+AStSG8pyA==;EndpointSuffix=core.windows.net";
                    string blobContainerName = "yeni";


                    BlobContainerClient blobContainerClient = new BlobContainerClient(connectionString, blobContainerName);

                    var uniqueName = Guid.NewGuid().ToString() + fileExtension;

                    BlobClient blobClient = blobContainerClient.GetBlobClient(uniqueName);

                    string contentType = "";

                    if (fileExtension == ".pdf")
                    {
                        contentType = "application/pdf";
                    }
                    else
                    {
                        contentType = $"image/{fileExtension.Substring(1)}";
                    }
                    blobClient.Upload(fileUploadStream, new BlobUploadOptions()
                    {

                        HttpHeaders = new BlobHttpHeaders
                        {
                            ContentType = contentType
                        }
                    }, cancellationToken: default);


                    updateSpendDto.ImagePath = $"https://ekitedepo.blob.core.windows.net/yeni/{uniqueName}";
                }

                Spend spend = _mapper.Map(updateSpendDto, await _spendRepository.GetByExpression(x => x.ApprovalStatus == ApprovalStatus.Pending && x.Id == updateSpendDto.Id));
				if (spend != null)
				{
					await _spendRepository.Update(spend);
					return true;
				}
				else
				{
					return false;
				}


			}
			catch (Exception)
			{
				return false;
			}


		}











	}
}
