<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live/request/request_live.proto

namespace Volc\Service\Live\Models\Request;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Live.Models.Request.DeletePullToPushTaskRequest</code>
 */
class DeletePullToPushTaskRequest extends \Google\Protobuf\Internal\Message
{
    /**
     *任务ID
     *
     * Generated from protobuf field <code>string TaskId = 1;</code>
     */
    protected $TaskId = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $TaskId
     *          任务ID
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Live\Models\GPBMetadata\RequestLive::initOnce();
        parent::__construct($data);
    }

    /**
     *任务ID
     *
     * Generated from protobuf field <code>string TaskId = 1;</code>
     * @return string
     */
    public function getTaskId()
    {
        return $this->TaskId;
    }

    /**
     *任务ID
     *
     * Generated from protobuf field <code>string TaskId = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setTaskId($var)
    {
        GPBUtil::checkString($var, True);
        $this->TaskId = $var;

        return $this;
    }

}

