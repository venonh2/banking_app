using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace banking_api.Entities
{
    public class Balance
    {
        public int id { get; set; }
        public float total { get; set; }
        public float debit { get; set; }
        public float credit { get; set; }

    }
}
