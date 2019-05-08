using System;

namespace WebAPITest.Models
{
    public class Value
    {
        public Value()
        {}

        public Value(int id, string description)
        {
            Id = id;
            Description = description;
        }

        public int Id { get; set; }
        public string Description { get; set; }

        public override string ToString()
        {
            return string.Format("Id: {0}, Description: {1}", Id, Description);
        }
    }
}