using System;
using System.Collections.Generic;
using System.Text;

namespace MoviesList.BusinessLayer.Models
{
    public class Stats
    {

        public class CategoryRating
        {
            public int Movies { get; set; }
            public string Category { get; set; }
            public int Rating { get; set; }
        }

        public class AverageCategoryRating
        {
            public string Category { get; set; }
            public int AverageRating { get; set; }
        }

    }
}
