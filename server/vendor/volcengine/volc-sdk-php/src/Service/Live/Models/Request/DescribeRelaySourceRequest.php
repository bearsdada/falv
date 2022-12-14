<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live/request/request_live.proto

namespace Volc\Service\Live\Models\Request;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Live.Models.Request.DescribeRelaySourceRequest</code>
 */
class DescribeRelaySourceRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * 域名空间名称。
     *
     * Generated from protobuf field <code>string Vhost = 1;</code>
     */
    protected $Vhost = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $Vhost
     *           域名空间名称。
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Live\Models\GPBMetadata\RequestLive::initOnce();
        parent::__construct($data);
    }

    /**
     * 域名空间名称。
     *
     * Generated from protobuf field <code>string Vhost = 1;</code>
     * @return string
     */
    public function getVhost()
    {
        return $this->Vhost;
    }

    /**
     * 域名空间名称。
     *
     * Generated from protobuf field <code>string Vhost = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setVhost($var)
    {
        GPBUtil::checkString($var, True);
        $this->Vhost = $var;

        return $this;
    }

}

