$("#add_user").submit(function (event)
{
    alert("Student Inserted Successfully!");
})

$("#add_company").submit(function (event)
{
    alert("Company Inserted Successfully!");
})

$("#update_user").submit(function (event)
{
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data = {}
    $.map(unindexed_array, function (n, i)
    {
        data[n['name']] = n['value'];
    })
    console.log(data);

    var request = {
        "url": `http://localhost:3000/api/studentupdate/${data.id}`,
        "method": "PUT",
        "data": data,
    }

    $.ajax(request).done(function (response)
    {
        alert("Data updated successfully");
    })

    // User won't be able to go back via back button
    location.replace(`http://localhost:3000/api/showstudent?email=${data.email}`);
})

$("#edit_company").submit(function (event)
{
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data = {}
    $.map(unindexed_array, function (n, i)
    {
        data[n['name']] = n['value'];
    })
    console.log(data);

    var request = {
        "url": `http://localhost:3000/api/companyupdate/${data.id}`,
        "method": "PUT",
        "data": data,
    }

    $.ajax(request).done(function (response)
    {
        alert("Data updated successfully");
    })

    // User won't be able to go back via back button
    location.replace(`http://localhost:3000/api/showcompany?email=${data.email}`);
})