using Microsoft.EntityFrameworkCore;

namespace MyService.Infrastructure;

public class MyServiceDbContext : DbContext
{
    public MyServiceDbContext(DbContextOptions<MyServiceDbContext> options)
        : base(options) { }
}
