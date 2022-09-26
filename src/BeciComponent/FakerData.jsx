import { faker } from "@faker-js/faker";

const FakerData = () =>{
  let users = [];
  let employees = [];
  for (let id = 1; id <= 15; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let avatar = faker.image.avatar()

    users.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email:email,
      avatar:avatar,
    });

    employees.push({
      id: id,
      email: email,
      avatar: avatar, 
    });
  }

  return { users: users, employees: employees };
}

//   let dataObj = generateUsers();
// module.exports = generateUsers;
export default FakerData;
