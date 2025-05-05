<?php
// Load products from JSON
$products = json_decode(file_get_contents('products.json'), true);

// Check if 'query' is set in POST
if (isset($_POST['query'])) {
    $query = strtolower(trim($_POST['query']));
    $results = [];

    // Filter matching products
    foreach ($products as $product) {
        $name = strtolower($product['name']);
        $description = strtolower($product['description']);

        if (strpos($name, $query) !== false || strpos($description, $query) !== false) {
            $results[] = $product;
        }
    }

    // Output HTML results
    if (!empty($results)) {
        foreach ($results as $product) {
            $id = htmlspecialchars($product['id']);
            $name = htmlspecialchars($product['name']);
            $price = htmlspecialchars($product['price']);
            $image = htmlspecialchars($product['image']);

            echo '<a href="products.html?id=' . urlencode($id) . '" style="text-decoration:none; color:inherit;">';
            echo '<div class="search-result">';
            echo '<img src="' . $image . '" alt="' . $name . '" width="60">';
            echo '<div>';
            echo '<strong>' . $name . '</strong><br>';
            echo '<span>$' . $price . '</span>';
            echo '</div></div>';
            echo '</a>';
        }
    } else {
        echo "<div>No products found.</div>";
    }
}
?>
