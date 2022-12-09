<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vod/request/request_vod.proto

namespace Volc\Service\Vod\Models\Request;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Vod.Models.Request.VodUpdateSubtitleStatusRequest</code>
 */
class VodUpdateSubtitleStatusRequest extends \Google\Protobuf\Internal\Message
{
    /**
     *视频ID
     *
     * Generated from protobuf field <code>string Vid = 1;</code>
     */
    protected $Vid = '';
    /**
     *转码视频id列表，多个用","隔开
     *
     * Generated from protobuf field <code>string FileIds = 2;</code>
     */
    protected $FileIds = '';
    /**
     *字幕语言列表，多个用","隔开
     *
     * Generated from protobuf field <code>string Languages = 3;</code>
     */
    protected $Languages = '';
    /**
     *字幕格式列表，多个用","隔开
     *
     * Generated from protobuf field <code>string Formats = 4;</code>
     */
    protected $Formats = '';
    /**
     *状态
     *
     * Generated from protobuf field <code>string Status = 5;</code>
     */
    protected $Status = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $Vid
     *          视频ID
     *     @type string $FileIds
     *          转码视频id列表，多个用","隔开
     *     @type string $Languages
     *          字幕语言列表，多个用","隔开
     *     @type string $Formats
     *          字幕格式列表，多个用","隔开
     *     @type string $Status
     *          状态
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Vod\Models\GPBMetadata\RequestVod::initOnce();
        parent::__construct($data);
    }

    /**
     *视频ID
     *
     * Generated from protobuf field <code>string Vid = 1;</code>
     * @return string
     */
    public function getVid()
    {
        return $this->Vid;
    }

    /**
     *视频ID
     *
     * Generated from protobuf field <code>string Vid = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setVid($var)
    {
        GPBUtil::checkString($var, True);
        $this->Vid = $var;

        return $this;
    }

    /**
     *转码视频id列表，多个用","隔开
     *
     * Generated from protobuf field <code>string FileIds = 2;</code>
     * @return string
     */
    public function getFileIds()
    {
        return $this->FileIds;
    }

    /**
     *转码视频id列表，多个用","隔开
     *
     * Generated from protobuf field <code>string FileIds = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setFileIds($var)
    {
        GPBUtil::checkString($var, True);
        $this->FileIds = $var;

        return $this;
    }

    /**
     *字幕语言列表，多个用","隔开
     *
     * Generated from protobuf field <code>string Languages = 3;</code>
     * @return string
     */
    public function getLanguages()
    {
        return $this->Languages;
    }

    /**
     *字幕语言列表，多个用","隔开
     *
     * Generated from protobuf field <code>string Languages = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setLanguages($var)
    {
        GPBUtil::checkString($var, True);
        $this->Languages = $var;

        return $this;
    }

    /**
     *字幕格式列表，多个用","隔开
     *
     * Generated from protobuf field <code>string Formats = 4;</code>
     * @return string
     */
    public function getFormats()
    {
        return $this->Formats;
    }

    /**
     *字幕格式列表，多个用","隔开
     *
     * Generated from protobuf field <code>string Formats = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setFormats($var)
    {
        GPBUtil::checkString($var, True);
        $this->Formats = $var;

        return $this;
    }

    /**
     *状态
     *
     * Generated from protobuf field <code>string Status = 5;</code>
     * @return string
     */
    public function getStatus()
    {
        return $this->Status;
    }

    /**
     *状态
     *
     * Generated from protobuf field <code>string Status = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkString($var, True);
        $this->Status = $var;

        return $this;
    }

}

