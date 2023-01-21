$("#add_user").submit(function (event)
{
    alert("Student Inserted Successfully!");
})

$("#add_company").submit(function (event)
{
    alert("Company Inserted Successfully!");
})

const deleteuser = async (this) =>
{
    var id = $(this).attr("data-id");
    console.log(id);
};