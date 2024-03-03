export const hamburgerLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png";
export const appLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png";
export const userIcon = "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png";
export const searchIcon = "https://static-00.iconduck.com/assets.00/search-icon-512x512-0apibful.png";

const GOOGLE_API_KEY = 'AIzaSyDVGJdscbJwGohBjI6Ez8-6ko_HXI-1hBM';
export const YOUTUBE_API_ENDPOINT = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}` ;
export const YOUTUBE_SEARCH_ENDPOINT =  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
