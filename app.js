var data = [];
var check = false
function Person(first, last, rollnumber, subject, remark) {
    this.firstName = first;
    this.lastName = last;
    this.rollnumber = rollnumber;
    this.subject = subject;
    this.remark = remark;
}

var Person1 = new Person('Ubaid', 'Nadeem', '20342', 'Engeneering', 'Passed')
var Person2 = new Person('Shahzain', 'Tariq', '33564', 'Engeneering', 'Passed')
var Person3 = new Person('Alyan', 'Tariq', '57322', 'Computer', 'Failed')
var Person4 = new Person('Yahya', 'Nadeem', '32245', 'Commerce', 'Passed')
var Person5 = new Person('Jannat', 'Nadeem', '54123', 'Sceince', 'Passed')
var Person6 = new Person('Mavia', 'Sabir', '86745', 'Engeneering', 'Passed')
var Person7 = new Person('Usman', 'Hamid', '12432', 'Sceince', 'Failed')
var Person8 = new Person('Sufyan', 'Usman', '89405', 'Engeneering', 'Passed')
var Person9 = new Person('Aniq', 'Tariq', '23643', 'Engeneering', 'Passed')
var Person10 = new Person('Sadiq', 'Siraj', '12425', 'Sceince', 'Passed')
var Person11 = new Person('Bashir', 'Siraj', '90867', 'Engeneering', 'Failed')
var Person12 = new Person('Basim', 'Salam', '23422', 'Engeneering', 'Passed')
var Person13 = new Person('Abbass', 'Bashir', '23123', 'Engeneering', 'Passed')
var Person14 = new Person('Hassan', 'Salam', '26879', 'Engeneering', 'Passed')
var Person15 = new Person('Salam', 'Siraj', '22541', 'Engeneering', 'Failed')
var Person16 = new Person('Ali', 'Israr', '22534', 'Sceince', 'Passed')
var Person17 = new Person('Hasseb', 'Pappu', '13553', 'Computer', 'Passed')
var Person18 = new Person('Mubeen', 'Shafeeq', '20135', 'Engeneering', 'Passed')
var Person19 = new Person('Aliza', 'Syed Muhammad toufeeq', '207865', 'Engenering', 'Passed')
var Person20 = new Person('Arslan', 'Arif', '89787', 'Engeneering', 'Passed')


data.push(Person1);
data.push(Person2);
data.push(Person3);
data.push(Person4);
data.push(Person5);
data.push(Person6);
data.push(Person7);
data.push(Person8);
data.push(Person9);
data.push(Person10);
data.push(Person11);
data.push(Person12);
data.push(Person13);
data.push(Person14);
data.push(Person15);
data.push(Person16);
data.push(Person17);
data.push(Person18);
data.push(Person19);
data.push(Person20)
// console.log(data)

var input = document.getElementById('input');

var search = document.getElementById('search');
search.addEventListener('click', () => {
    // location.replace('www.youtube.com')
    // console.log(input.value)
    data.forEach(value => {
        if (input.value == value.rollnumber || input.value == value.firstName) {
            console.log(value)
            var search_bar = document.getElementById('search_bar')
            search_bar.style.display = 'none'

            function resulthide() {
                var result_div = document.getElementById('result_div');
                result_div.style.display = 'block'

                var name = document.getElementById('name');
                name.innerHTML = value.firstName;
                var fathername = document.getElementById('fathername');
                fathername.innerHTML = value.lastName;
                var rollnumber = document.getElementById('rollnumber');
                rollnumber.innerHTML = value.rollnumber;
                var subject = document.getElementById('subject');
                subject.innerHTML = value.subject;
                var Result = document.getElementById('result');
                Result.innerHTML = value.remark;

                check = true;
                console.log(check)

                var remarks = document.getElementById('remarks');
                remarks.innerHTML = 'Result'
                remarks.style.fontSize = '45px'

            }

            var remarks = document.getElementById('remarks');
            remarks.innerHTML = 'loading....'

            setTimeout(resulthide, 3000)
        }
        else {


            var remarks = document.getElementById('remarks');
            remarks.innerHTML = 'loading....'
            remarks.style.fontSize = '25px'
            var search_bar = document.getElementById('search_bar')
            search_bar.style.display = 'none'

            function erorr() {
                console.log(check)

                if (check == false) {
                    var remarks = document.getElementById('remarks');
                    remarks.innerHTML = 'Result Not Found'
                    remarks.style.fontSize = '30px'
                }
                else {
                    var remarks = document.getElementById('remarks');
                    remarks.innerHTML = 'Result'
                    remarks.style.fontSize = '55px'
                }
            }
            setTimeout(erorr, 3000)

        }
    });

});

var btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    location.reload();
})