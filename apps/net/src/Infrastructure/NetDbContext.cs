using Microsoft.EntityFrameworkCore;

namespace Net.Infrastructure;

public class NetDbContext : DbContext
{
    public NetDbContext(DbContextOptions<NetDbContext> options)
        : base(options) { }
}
