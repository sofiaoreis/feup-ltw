<?php

try {

  $db = new PDO('sqlite:./db/dboltw.db');
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

function getAllEvents(){
  try{
    global $db;
    $stmt=$db->prepare("SELECT * FROM Event");
    $query = $stmt->execute();
    $result= $stmt->fetchAll();
    return $result;
  }
  catch(PDOException $e){
    $_SESSION['errors']=" <script type=\"text/javascript\">
      swal({
            title: \"Error!\",
            text: ". $stmt->errorInfo() .",
            type: \"error\",
            confirmButtonText: \"OK\"
      });
      </script>";
    return -1;
  }
}

function getAllPublicEvents(){
  try{
    global $db;
    $stmt=$db->prepare("SELECT * FROM Event WHERE public=1 ORDER BY date ASC");
    $query = $stmt->execute();
    $result= $stmt->fetchAll();
    return $result;
  }
  catch(PDOException $e){
    $_SESSION['errors']=" <script type=\"text/javascript\">
      swal({
            title: \"Error!\",
            text: ". $stmt->errorInfo() .",
            type: \"error\",
            confirmButtonText: \"OK\"
      });
      </script>";
    return -1;
  }
}

function getCreator($idU){

  try{
    global $db;
    $stmt=$db->prepare("SELECT username FROM User WHERE idUser=:idU");
    $stmt->bindValue(':idU',$idU,PDO::PARAM_STR);
    $found=$stmt->execute();
    $columns=$stmt->fetch();
    return $columns;
  }catch(PDOException $e){

    if(isset($_SESSION['user_id'])){
      $log=$e->getMessage()." ___Date=".date("Y-m-d")." ___ idUser=".$_SESSION['user_id'].PHP_EOL;
    }else{
      $log=$e->getMessage()." ___Date= ".date("Y-m-d")."\n";
    }
    error_log($log,3,"./error.log");
        return -1;
  }
}

function getImg($idI){

  try{
    global $db;
    $stmt=$db->prepare("SELECT path FROM Image WHERE idImage=:idI");
    $stmt->bindValue(':idI',$idI,PDO::PARAM_STR);
    $found=$stmt->execute();
    $columns=$stmt->fetch();
    return $columns;
  }catch(PDOException $e){

    if(isset($_SESSION['user_id'])){
      $log=$e->getMessage()." ___Date=".date("Y-m-d")." ___ idUser=".$_SESSION['user_id'].PHP_EOL;
    }else{
      $log=$e->getMessage()." ___Date= ".date("Y-m-d")."\n";
    }
    error_log($log,3,"./error.log");
        return -1;
  }
}


$events=getAllPublicEvents();
?>