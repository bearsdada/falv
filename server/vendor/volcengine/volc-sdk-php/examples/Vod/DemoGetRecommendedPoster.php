// Code generated by protoc-gen-volcengine-sdk
// source: getRecommendedPoster
// DO NOT EDIT!
<?php
require('../../vendor/autoload.php');

$client = Volc\Service\Vod\Vod::getInstance();
$client->setAccessKey('your ak');
$client->setSecretKey('your sk');

$request = new Volc\Service\Vod\Models\Request\VodGetRecommendedPosterRequest();
$request->setVids("your Vids");


$response = new Volc\Service\Vod\Models\Response\VodGetRecommendedPosterResponse();
try {
    $response = $client->getRecommendedPoster($request);
} catch (Exception $e) {
    echo $e, "\n";
} catch (Throwable $e) {
    echo $e, "\n";
}
if ($response != null && $response->getResponseMetadata() != null && $response->getResponseMetadata()->getError() != null) {
    echo $response->getResponseMetadata()->getError()->serializeToJsonString(), "\n";
} else {
    echo $response->serializeToJsonString(), "\n";
}
