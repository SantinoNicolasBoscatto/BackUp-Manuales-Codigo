<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
            $uploadedFile = $_FILES['file'];
            $destination = './f' . $uploadedFile['name'];
            if (move_uploaded_file($uploadedFile['tmp_name'], $destination)) {
                echo 'El archivo se ha cargado correctamente.';
            } else {
                echo 'Hubo un error al cargar el archivo.';
            }
        } else {
            echo 'No se cargó ningún archivo o hubo un error al cargar.';
        }
    } else {
        echo 'Método no permitido.';
    }
?>
