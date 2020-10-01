using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MoviesList.BusinessLayer.Models;
using MoviesList.BusinessLayer.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MoviesList.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        // GET: api/<MovieController>
        private readonly DashboardRepository dashboardRepository;

        public DashboardController()
        {
            dashboardRepository = new DashboardRepository();
        }

        [HttpGet("GetMoviesCountPerCategory")]
        public IEnumerable<MovieCategory> GetMoviesCountPerCategory()
        {

            return dashboardRepository.GetMoviesCountPerCategory();
        }

    }
}
