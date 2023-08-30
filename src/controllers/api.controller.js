import SalaryService from "../services/salary.service";
class ApiController {
    constructor(router) {
        this.router = router;
        this.init();
        this.salaryService = new SalaryService();
    }
    init() {
        this.router.post('/salary', async (req, res) => {
            const { id, year, month } = req.body;
            res.json(await this.salaryService.getSalary(id, year, month));
        })
    }
}
export default ApiController