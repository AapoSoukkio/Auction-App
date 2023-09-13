using AuctionService.IntegrationTests.Fixtures;

namespace AuctionService.IntegrationTests
{
    public class AuctionControllerTests : IClassFixture<CustomWebAppFactory>, IAsyncLifetime
    {
        private readonly CustomWebAppFactory _factory;
        private readonly HttpClient _httpClient;
        private const string _gT_ID = "afbee524-5972-4075-8800-7d1f9d7b0a0c";

        public AuctionControllerTests(CustomWebAppFactory factory)
        {
            _factory = factory;
            _httpClient = factory.CreateClient();
        }

        public Task InitializeAsync()
        {
            throw new NotImplementedException();
        }

        public Task DisposeAsync()
        {
            throw new NotImplementedException();
        }
    }
}
