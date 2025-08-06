export const LOGO_IMG = new URL("/assets/logo.png", import.meta.url).href;
const GOOGLE_API_KEY = "AIzaSyAGpUo3QyzybLRb_X1gbhjnRNqXXUpPeZw";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SERCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// export const LOGO_IMG = "/assets/logo.png";
