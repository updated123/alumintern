const { Repository } = require('../repository/index');

class EmployeeService {
    constructor() {
        this.Repository = new Repository();
    }

    async create(data) {
        try {
            const Employee = await this.Repository.create(data);
            return Employee;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async delete(Id) {
        try {
            const response = await this.cityRepository.delete(Id);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async update(Id, data) {
        try {
            const city = await this.cityRepository.updateCity(Id, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async get(Id) {
        try {
            const employee = await this.cityRepository.getCity(Id);
            return employee;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = EmployeeService;