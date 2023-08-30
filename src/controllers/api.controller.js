import SalaryService from "../services/salary.service";
class ApiController {
    constructor(router) {
        this.router = router;
        this.init();
        this.salaryService = new SalaryService();
    }
    init() {
        this.router.get('/salary', async (req, res) => {
            res.json(await this.salaryService.getSalary());
        })
    }
}
export default ApiController