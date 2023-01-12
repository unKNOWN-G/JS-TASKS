// Employee Class
class Employee {
  constructor(id, name, role, satisfaction) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.satisfaction = satisfaction;
  }
}

// Extract Data from Table
function extractData() {
  let tableBodyElem = document.getElementById("tableBody");
  let rowElems = tableBodyElem.getElementsByTagName("tr");
  for (elem of rowElems) {
    console.log(elem);
    let colElem = elem.getElementsByTagName("td");
    let id = colElem[0].innerHtml;
    let name = colElem[1].innerHtml;
    let role = colElem[2].innerHtml;
    let satisfaction = colElem[3].innerHtml;

    console.log(id, name, role, satisfaction);
    // let employeeObj = new Employee(id, name, role, satisfaction);
    // console.log(employeeObj);
  }
}

extractData();

// Unique Factor Check

// Logic (Add, Update and Delete Operations)
class Logic {
  constructor() {
    this.wiki = [
      new Employee(0, "X-Major", 30, "Yes"),
      new Employee(1, "unKNOWN", 20, "No"),
    ];
    this.toggler = 1;
    this.updateTable();
  }

  getInputData() {
    let id = document.getElementById("employeeId").value;
    let name = document.getElementById("employeeName").value;
    let role = document.getElementById("employeeRole").value;
    let satisfaction = document.getElementById("employeeSatisfied").value;
    let newEmployee = new Employee(id, name, role, satisfaction);

    return newEmployee;
  }

  createEmployeeIdentity() {
    let heroInfo = this.getInputData();
    this.wiki.push(heroInfo);
    console.log(this.wiki);
    this.updateTable();
  }

  updateEmployeeInfo() {
    let heroInfo = this.getInputData();
    for (var i = 0; i < this.wiki.length; i++) {
      if (this.wiki[i].id == heroInfo.id) {
        this.wiki[i].id = heroInfo.id;
        this.wiki[i].name = heroInfo.name;
        this.wiki[i].role = heroInfo.role;
        this.wiki[i].satisfaction = heroInfo.satisfaction;
      }
    }
    this.updateTable();
  }

  deleteEmployee() {
    let heroInfo = this.getInputData();
    for (var i = 0; i < this.wiki.length; i++) {
      if (this.wiki[i].id == heroInfo.id) {
        this.wiki.splice(i, 1);
        break;
      }
    }
    this.updateTable();
  }

  updateTable() {
    let newHero = this.getInputData();
    let data = this.wiki;
    let dataDisplayObj = document.querySelector("#tableBody");
    while (dataDisplayObj.firstChild) {
      dataDisplayObj.removeChild(dataDisplayObj.firstChild);
    }

    var tableobj = dataDisplayObj;
    for (let i = 0; i < data.length; i++) {
      var rowobj = document.createElement("tr");

      var rowobj1 = document.createElement("td");
      var rowobj2 = document.createElement("td");
      var rowobj3 = document.createElement("td");
      var rowobj4 = document.createElement("td");

      rowobj1.innerHTML = data[i].id;
      rowobj2.innerHTML = data[i].name;
      rowobj3.innerHTML = data[i].role;
      rowobj4.innerHTML = data[i].satisfaction;

      rowobj.appendChild(rowobj1);
      rowobj.appendChild(rowobj2);
      rowobj.appendChild(rowobj3);
      rowobj.appendChild(rowobj4);

      tableobj.appendChild(rowobj);
    }
  }

  sortElems(property) {
    // console.log("Clicked");
    this.wiki.sort((a, b) => {
      let anew = a[property].toString().toLowerCase();
      let bnew = b[property].toString().toLowerCase();

      return anew < bnew
        ? -1 * this.toggler
        : anew > bnew
        ? 1 * this.toggler
        : 0;
    });
    this.toggler = this.toggler * -1;
    this.updateTable();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const heroOperations = new Logic();
  console.log(heroOperations.wiki);

  // Event Listeners

  // Add Event Listener
  let addButton = document.querySelector("#add");
  addButton.addEventListener("click", function () {
    heroOperations.createEmployeeIdentity();
  });

  // Update Event Listener
  let updateButton = document.querySelector("#update");
  updateButton.addEventListener("click", function () {
    heroOperations.updateEmployeeInfo();
  });

  // Delete Event Listener
  let deleteButton = document.querySelector("#delete");
  deleteButton.addEventListener("click", function () {
    heroOperations.deleteEmployee();
  });

  // Sorting Event Listneners
  let sortId = document.getElementById("id");
  sortId.addEventListener("click", function () {
    heroOperations.sortElems("id");
  });

  let sortName = document.getElementById("name");
  sortName.addEventListener("click", function () {
    heroOperations.sortElems("name");
  });

  let sortRole = document.getElementById("role");
  sortRole.addEventListener("click", function () {
    heroOperations.sortElems("role");
  });

  let sortSatisy = document.getElementById("satisfy");
  sortSatisy.addEventListener("click", function () {
    heroOperations.sortElems("satisfaction");
  });
});

// Sorting
