import axios from "axios";
class SalaryService {
   async getSalary() {
        let url = 'https://www.fhs.com.tw/ads/api/Furnace/rest/json/hr/s16/VNW0014732vkokv2023-06';
        let response = await axios.get(url);
        return response.data;
    }
}
export default  SalaryService