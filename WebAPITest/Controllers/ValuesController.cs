using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Web.Http;
using WebAPITest.Models;

namespace WebAPITest.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<Value> Get()
        {
            return new Value[]
            {
                new Value(1, "Value1"), 
                new Value(2, "Value2"), 
                new Value(3, "Value3")
            };
        }

        // GET api/values/5
        public Value Get(int id)
        {
            return new Value(1111, "A random generated value");
        }

        // POST api/values
        public void Post([FromBody]Value value)
        {
            Debug.WriteLine("POST {0}", value);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Value value)
        {
            Debug.WriteLine("PUT {0} - {1}", id, value);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            Debug.WriteLine("DELETE {0}", id);
        }
    }
}
