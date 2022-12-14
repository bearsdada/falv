// Code generated by protoc-gen-volcengine-sdk
// source: generatePlayURL
// DO NOT EDIT!
<?php
require('../../vendor/autoload.php');

$client = Volc\Service\Live\Live::getInstance();
$client->setAccessKey('your ak');
$client->setSecretKey('your sk');

$request = new Volc\Service\Live\Models\Request\GeneratePlayURLRequest();
$request->setVhost("your Vhost");
$request->setDomain("your Domain");
$request->setApp("your App");
$request->setStream("your Stream");
$request->setSuffix("your Suffix");
$request->setType("your Type");
$request->setValidDuration(0);
$request->setExpiredTime("your ExpiredTime");


$response = new Volc\Service\Live\Models\Response\GeneratePlayURLResponse();
try {
    $response = $client->generatePlayURL($request);
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
