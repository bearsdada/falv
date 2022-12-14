<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live/business/pull_to_push.proto

namespace Volc\Service\Live\Models\Business;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Live.Models.Business.CreatePullToPushTaskResult</code>
 */
class CreatePullToPushTaskResult extends \Google\Protobuf\Internal\Message
{
    /**
     *生成拉流转推任务ID
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
     *          生成拉流转推任务ID
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Live\Models\GPBMetadata\PullToPush::initOnce();
        parent::__construct($data);
    }

    /**
     *生成拉流转推任务ID
     *
     * Generated from protobuf field <code>string TaskId = 1;</code>
     * @return string
     */
    public function getTaskId()
    {
        return $this->TaskId;
    }

    /**
     *生成拉流转推任务ID
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

