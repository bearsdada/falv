// Code generated by protoc-gen-volcengine-sdk
// source: getAudioInfoForAudit
// DO NOT EDIT!
<?php
require('../../vendor/autoload.php');

$client = Volc\Service\Vod\Vod::getInstance();
$client->setAccessKey('your ak');
$client->setSecretKey('your sk');

$request = new Volc\Service\Vod\Models\Request\VodGetAudioInfoForAuditRequest();
$request->setVid("your Vid");
$request->setStrategy("your Strategy");


$response = new Volc\Service\Vod\Models\Response\VodGetAudioInfoForAuditResponse();
try {
    $response = $client->getAudioInfoForAudit($request);
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
