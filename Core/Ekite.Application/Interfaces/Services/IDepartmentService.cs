﻿using Ekite.Application.DTOs.DepartmentDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Interfaces.Services
{
    public interface IDepartmentService
    {
        Task<List<DepartmentDto>> GetAllDepartments();
    }
}
