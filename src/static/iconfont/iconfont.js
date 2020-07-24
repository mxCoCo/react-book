import { createGlobalStyle } from 'styled-components'

export const GlobalStyleFont = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1595580282059'); /* IE9 */
    src: url('./iconfont.eot?t=1595580282059#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWYAAsAAAAACnQAAAVJAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDVgqHLIY4ATYCJAMcCxAABCAFhG0HfxsnCcgOJaHAkAAAEAhgPDx/P+rc99+P6aRIzMSkwKGhsU1a0ACN8vUVWlqLFpj/Hzf9Gx5UkrqkdKIVV2RiARII0ISTpq5zk2xfXH/+WOpF6YHlu0qQU/zvKnpVGknjUQINKKItUge6AdMAeCbi1cvIrCOevJlAq0lTYMcFZSpwkIWuwLA71kiBQyMsT3BD46sGTswQL0ChSSOyBwCey9+P/xATDiApCwgPvLjNN0DWL6/PB1H3/90wiylg2V8S+mkUWAIy8Www/RQq2kuQVvcxcidAu0aSf3l9FvBZwucOnw/+/z8NI397mAztEb3zHzyyUChVElEB3O0K89pV3UNLoiTzy19J8CtAScGvBPQyfjtAScXvwbAEer17J3pADAPER8FcbidZwc+Sety9HQOc3BzdfJwcHLyJCMe2Fy9Ur15ptDhcfXmpliQto6VUBNaD/WMJSWpatcpLtSLWWem9kpjvq129+SrV6L6e/fP3du+ZNqpZlHzVo12XlOarjeTLbpVLIqc9W3Z3l1ev2lxOPAmSb3wa73r6eahi07PmtQ5t3At32rUvANV3IJzn74WW28sSdljcNna+lEmvnL+/p3UHqJhP8wlccY2TCrcQ02esCsE3+E2jzhPzAVoDv4KPPsJ6tNoeeXia+sQe6N5LzL+OYRa15kxZQkmjXthwz5QNL71V2pVS6ubILHg8Fqhwrmd+k+dS5qoPTKO7At/+efynHzZeFvmu/eD2ZpkAZ6wJM0tLjx3Lys7Q3RfasRPo329Dh+895+GEMVGbl3/seFFRxpzbXAucRP8MfmmM77oPbsGZ5Pyn+k/MuvHc5wlT82hcEfOxtSbR9ll48KUPvIYnDI9fM2GNx7KZtcrKsLa2sCplzSllbVhlSerZWuWpAUlleO2p8NEzIPuVXJLQtogwpg6EpHybvNoVoopyODJCPCBGjsjeHtdjfB5MuR9tOfndr+57v+u9ruqC/CFQORBSb+xdXGZP4DNly69fX46IMKYXXXb9xnJZpm3iSxeXtQGxAfEf/ob6Dx/uFw6ElKxfVmFG8JfBFabw6YS8p7TL/7rcV+aMSrUsR8dmSPK/dx+IN5MiMUV2BD9RwzrPJkqzUj6ZoxXv+3v/PTr94/QkfLvVfcaE8m8V/gPJdXMMwcvTxcaO8OOFw4eXRZQdnj5l+rzcIxecsd/LFlgcufLqELY78co3LdiGuJzyGdA6N3eOLptFYz/82KMGPdB59S0LiX4LOgHuj6L7qFLyL6OrKJt/HBlROfHcVwzn/0QF6mNv0p93J2/ffZuY65r2a0P8oJd8zbrSQqX7o3LYn/kf6LHY8le1LJyVPVsYqbMzcWJemKkd18z7c7ZGC/iL5nu9R96BxUMJjYEKktoEFBpT1MxcglKbZag09qDVosLT2/QRIJEdgQUDAkK3w5B0+gyFbg+pmfkulAZ9C5XuQNDqMjwv2GYmWDxXoCmRNpC6FpLV8xwTx0Q8H15DGxuslFC3SZ6GFurZGhkdEdXuLqQ5WtjHIfWNxhhRZEhG4OvIAnE72mrlSZvAm2m9GGESRVtKZCQz9EoRer4OcEcENIqIZkDSaUFi6fE4DC8uwjs/X4Nm1MCKIkyM6xpq0AT12PWTokWIWkAtdHOLxj2XsfUaGcUQqckgMfpQXh1SASVp1qjNI9mGtzOj6YkimDY0bVJE0nzMUnfE8b11r/MaaBU+tA4ZhjA5psDsMHvMAeoHpgaqmeWUrSaWozhO0hzTlKI4A8WbkkYD2xtqoslp5wpaKRZnEpSZxdGybIqoorn6loY6itexAAAAAA==') format('woff2'),
    url('./iconfont.woff?t=1595580282059') format('woff'),
    url('./iconfont.ttf?t=1595580282059') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1595580282059#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .iconfontRefresh {
    font-family: "iconfont" !important;
    font-size: 14px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`