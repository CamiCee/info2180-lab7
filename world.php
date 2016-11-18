<?php
$host = getenv('IP');
$country = $_GET['all'];
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
if($country=="")
{
   $stmt = $conn->query("SELECT * FROM countries WHERE 1 = 0");
}
else if($country=="true")
{
    $stmt = $conn->query("SELECT * FROM countries");
}
else
{
    $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
}
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo '<ul>';
foreach ($results as $row) {
  echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
}
echo '</ul>';
?>