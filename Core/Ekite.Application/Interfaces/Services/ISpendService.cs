using Ekite.Application.DTOs.SpendDto;
using Ekite.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Interfaces.Services
{
	public interface ISpendService
	{
		Task<bool> TCreate(CreateSpendDto createSpendDto);
		Task<bool> THardDelete(int id);
		Task<Spend> TGetById(int id);
		Task<bool> TUpdate(UpdateSpendDto updateSpendDto);
		Task<List<ResultSpendDto>> TGetAll(Expression<Func<Spend, bool>> expression = null);
		Task<UpdateSpendDto> TGetUpdateSpend(int id);
	}
}
