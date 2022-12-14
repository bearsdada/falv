<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live/business/VQScore.proto

namespace Volc\Service\Live\Models\Business;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Live.Models.Business.VQScoreTaskListInfo</code>
 */
class VQScoreTaskListInfo extends \Google\Protobuf\Internal\Message
{
    /**
     *查询开始时间，UTC时间格式
     *
     * Generated from protobuf field <code>string StartTime = 2;</code>
     */
    protected $StartTime = '';
    /**
     *查询结束时间，UTC时间格式
     *
     * Generated from protobuf field <code>string EndTime = 3;</code>
     */
    protected $EndTime = '';
    /**
     *条目总数
     *
     * Generated from protobuf field <code>int64 Total = 4;</code>
     */
    protected $Total = 0;
    /**
     *测评任务列表明细
     *
     * Generated from protobuf field <code>repeated .Volcengine.Live.Models.Business.VQScoreTaskInfo TaskList = 5;</code>
     */
    private $TaskList;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $StartTime
     *          查询开始时间，UTC时间格式
     *     @type string $EndTime
     *          查询结束时间，UTC时间格式
     *     @type int|string $Total
     *          条目总数
     *     @type \Volc\Service\Live\Models\Business\VQScoreTaskInfo[]|\Google\Protobuf\Internal\RepeatedField $TaskList
     *          测评任务列表明细
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Live\Models\GPBMetadata\VQScore::initOnce();
        parent::__construct($data);
    }

    /**
     *查询开始时间，UTC时间格式
     *
     * Generated from protobuf field <code>string StartTime = 2;</code>
     * @return string
     */
    public function getStartTime()
    {
        return $this->StartTime;
    }

    /**
     *查询开始时间，UTC时间格式
     *
     * Generated from protobuf field <code>string StartTime = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setStartTime($var)
    {
        GPBUtil::checkString($var, True);
        $this->StartTime = $var;

        return $this;
    }

    /**
     *查询结束时间，UTC时间格式
     *
     * Generated from protobuf field <code>string EndTime = 3;</code>
     * @return string
     */
    public function getEndTime()
    {
        return $this->EndTime;
    }

    /**
     *查询结束时间，UTC时间格式
     *
     * Generated from protobuf field <code>string EndTime = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setEndTime($var)
    {
        GPBUtil::checkString($var, True);
        $this->EndTime = $var;

        return $this;
    }

    /**
     *条目总数
     *
     * Generated from protobuf field <code>int64 Total = 4;</code>
     * @return int|string
     */
    public function getTotal()
    {
        return $this->Total;
    }

    /**
     *条目总数
     *
     * Generated from protobuf field <code>int64 Total = 4;</code>
     * @param int|string $var
     * @return $this
     */
    public function setTotal($var)
    {
        GPBUtil::checkInt64($var);
        $this->Total = $var;

        return $this;
    }

    /**
     *测评任务列表明细
     *
     * Generated from protobuf field <code>repeated .Volcengine.Live.Models.Business.VQScoreTaskInfo TaskList = 5;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getTaskList()
    {
        return $this->TaskList;
    }

    /**
     *测评任务列表明细
     *
     * Generated from protobuf field <code>repeated .Volcengine.Live.Models.Business.VQScoreTaskInfo TaskList = 5;</code>
     * @param \Volc\Service\Live\Models\Business\VQScoreTaskInfo[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setTaskList($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Volc\Service\Live\Models\Business\VQScoreTaskInfo::class);
        $this->TaskList = $arr;

        return $this;
    }

}

