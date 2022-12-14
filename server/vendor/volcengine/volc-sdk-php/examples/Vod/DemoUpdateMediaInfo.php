// Code generated by protoc-gen-volcengine-sdk
// source: updateMediaInfo
// DO NOT EDIT!
<?php
require('../../vendor/autoload.php');

$client = Volc\Service\Vod\Vod::getInstance();
$client->setAccessKey('your ak');
$client->setSecretKey('your sk');

$request = new Volc\Service\Vod\Models\Request\VodUpdateMediaInfoRequest();
$request->setVid("your Vid");
$request->setPosterUriUnwrapped("your PosterUri");
$request->setTitleUnwrapped("your Title");
$request->setDescriptionUnwrapped("your Description");
$request->setTagsUnwrapped("your Tags");
$request->setClassificationIdUnwrapped(0);


$response = new Volc\Service\Vod\Models\Response\VodUpdateMediaInfoResponse();
try {
    $response = $client->updateMediaInfo($request);
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
