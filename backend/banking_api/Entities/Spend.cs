using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace banking_api.Entities
{
    public class Spend
    {
        public int id { get; set; }
        public int credit_card_id { get; set; }
        public uint value { get; set; }
        public string place_name { get; set; }
        public DateTime date { get; set; }
    }
}
