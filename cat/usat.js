
/**
 * Example of DISPLAY TEXT
 * D0158103012100820281028D0404434154C80401020304
 */

 /**
 * BER-TLV TAG of Card application toolkit templates
 */

const TAG_BERTLV_PROACTIVE = 0xD0
const TAG_BERTLV_SMS_PP_DOWNLOAD = 0xD1
const TAG_BERTLV_CELL_BROADCAST_DOWNLOAD = 0xD2
const TAG_BERTLV_MENU_SELECTION = 0xD3
const TAG_BERTLV_CALL_CONTROL = 0xD4
const TAG_BERTLV_MO_SHORT_MESSAGE_CONTROL = 0xD5
const TAG_BERTLV_EVENT_DOWNLOAD = 0xD6
const TAG_BERTLV_TIMER_EXPIRATION = 0xD7
const TAG_BERTLV_USSD_DOWNLOAD = 0xD9
const TAG_BERTLV_MMS_TRANSFER_STATUS = 0xDA
const TAG_BERTLV_MMS_NOTIFICATION_DOWNLOAD = 0xDB
const TAG_BERTLV_TERMINAL_APPLICATION = 0xDC
const TAG_BERTLV_GEOGRAPHICAL_LOCATION_REPORTING = 0xDD
const TAG_BERTLV_ENVELOPE = 0xDE
const TAG_BERTLV_PROSE_REPORT = 0xDF

var mapBerTlv = new Map(
    [
        [TAG_BERTLV_PROACTIVE, ["Proactive Command", printProactive]]
    ]
)

/**
 * Comprehension-TLV tag of Card application toolkit
 */
const TAG_COMPREHENSION_TLV_COMMAND_DETAIL = 0x81
const TAG_COMPREHENSION_TLV_DEVICE_IDENTITY = 0x82
const TAG_COMPREHENSION_TLV_RESULT = 0x83
const TAG_COMPREHENSION_TLV_DURATION = 0x84
const TAG_COMPREHENSION_TLV_ALPHA_IDENTIFIER = 0x85
const TAG_COMPREHENSION_TLV_ADDRESS = 0x86
const TAG_COMPREHENSION_TLV_CAPABILITY_CONFIGURATION_PARAMETERS = 0x87
const TAG_COMPREHENSION_TLV_SUBADDRESS = 0x88
const TAG_COMPREHENSION_TLV_SS_STRING = 0x89
const TAG_COMPREHENSION_TLV_BSSID = 0x89
const TAG_COMPREHENSION_TLV_PLMN_ID = 0x89
const TAG_COMPREHENSION_TLV_E_UTRAN_TIMING_ADVANCE = 0x89
const TAG_COMPREHENSION_TLV_USSD_STRING = 0x8A
const TAG_COMPREHENSION_TLV_IP_ADDRESS_LIST = 0x8A
const TAG_COMPREHENSION_TLV_HESSID = 0x8A
const TAG_COMPREHENSION_TLV_SMS_TPDU = 0x8B
const TAG_COMPREHENSION_TLV_SURROUNDING_MACROCELLS = 0x8B
const TAG_COMPREHENSION_TLV_CELL_BROADCAST_PAGE = 0x8C
const TAG_COMPREHENSION_TLV_TEXT_STRING = 0x8D
const TAG_COMPREHENSION_TLV_TONE = 0x8E
const TAG_COMPREHENSION_TLV_E_CAT_CLIENT_PROFILE = 0x8E
const TAG_COMPREHENSION_TLV_ITEM_IDENTIFIER = 0x90
const TAG_COMPREHENSION_TLV_ENCAPSULATED_ENVELOPE = 0x90
const TAG_COMPREHENSION_TLV_RESPONSE_LENGTH = 0x91
const TAG_COMPREHENSION_TLV_CALL_CONTROL_RESULT = 0x91
const TAG_COMPREHENSION_TLV_FILE_LIST = 0x92
const TAG_COMPREHENSION_TLV_CAT_SERVICE_LIST = 0x92
const TAG_COMPREHENSION_TLV_LOCATION_INFORMATION = 0x93
const TAG_COMPREHENSION_TLV_IMEI = 0x94
const TAG_COMPREHENSION_TLV_HELP_REQUEST = 0x95
const TAG_COMPREHENSION_TLV_NETWORK_MEASUREMENT_RESULT = 0x96
const TAG_COMPREHENSION_TLV_DEFAULT_TEXT = 0x97
const TAG_COMPREHENSION_TLV_ITEM_NEXT_ACTION_INDICATOR = 0x18
const TAG_COMPREHENSION_TLV_EVENT_LIST = 0x99
const TAG_COMPREHENSION_TLV_CAUSE = 0x9A
const TAG_COMPREHENSION_TLV_LOCATION_STATUS = 0x9B
const TAG_COMPREHENSION_TLV_TRANSACTION_IDENTIFIER = 0x9C
const TAG_COMPREHENSION_TLV_BCCH_CHANNEL_LIST = 0x9D
const TAG_COMPREHENSION_TLV_DATA_CONNECTION_STATUS = 0x9D
const TAG_COMPREHENSION_TLV_ICON_IDENTIFIER = 0x9E
const TAG_COMPREHENSION_TLV_ITEM_ICON_IDENTIFIER_LIST = 0x9F
const TAG_COMPREHENSION_TLV_CARD_READER_STATUS = 0xA0
const TAG_COMPREHENSION_TLV_CARD_ATR = 0xA1
const TAG_COMPREHENSION_TLV_E_CAT_SEQUENCE_NUMBER = 0xA1
const TAG_COMPREHENSION_TLV_C_APDU = 0xA2
const TAG_COMPREHENSION_TLV_ENCRYPTED_TLV_LIST = 0xA2
const TAG_COMPREHENSION_TLV_R_APDU = 0xA3
const TAG_COMPREHENSION_TLV_SA_TEMPLATE = 0xA3
const TAG_COMPREHENSION_TLV_TIMER_IDENTIFIER = 0xA4
const TAG_COMPREHENSION_TLV_TIMER_VALUE = 0xA5
const TAG_COMPREHENSION_TLV_DATE_TIME_AND_TIME_ZONE = 0xA6
const TAG_COMPREHENSION_TLV_CALL_CONTROL_REQUESTED_ACTION = 0xA7
const TAG_COMPREHENSION_TLV_AT_COMMAND = 0xA8
const TAG_COMPREHENSION_TLV_AT_RESPONSE = 0xA9
const TAG_COMPREHENSION_TLV_BC_REPEAT_INDICATOR = 0xAA
const TAG_COMPREHENSION_TLV_DATA_CONNECTION_TYPE = 0xAA
const TAG_COMPREHENSION_TLV_IMMEDIATE_RESPONSE = 0xAB
const TAG_COMPREHENSION_TLV_DTMF_STRING = 0xAC
const TAG_COMPREHENSION_TLV_LANGUAGE = 0xAD
const TAG_COMPREHENSION_TLV_TIMING_ADVANCE = 0xAE
const TAG_COMPREHENSION_TLV_SM_CAUSE = 0xAE
const TAG_COMPREHENSION_TLV_AID = 0xAF
const TAG_COMPREHENSION_TLV_BROWSER_IDENTITY = 0xB0
const TAG_COMPREHENSION_TLV_URL = 0xB1
const TAG_COMPREHENSION_TLV_IMS_uri = 0xB1
const TAG_COMPREHENSION_TLV_BEARER = 0xB2
const TAG_COMPREHENSION_TLV_PROVISIONING_REFERENCE_FILE = 0xB3
const TAG_COMPREHENSION_TLV_BROWSER_TERMINATION_CAUSE = 0xB4
const TAG_COMPREHENSION_TLV_SUPPORTED_RADIO_ACCESS_TECHNOLOGIES = 0xB4
const TAG_COMPREHENSION_TLV_BEARER_DESCRIPTION = 0xB5
const TAG_COMPREHENSION_TLV_CHANNEL_DATA = 0xB6
const TAG_COMPREHENSION_TLV_CHANNEL_DATA_LENGTH = 0xB7
const TAG_COMPREHENSION_TLV_CHANNEL_STATUS = 0xB8
const TAG_COMPREHENSION_TLV_BUFFER_SIZE = 0xB9
const TAG_COMPREHENSION_TLV_CARD_READER_IDENTIFIER = 0xBA
const TAG_COMPREHENSION_TLV_FREFRESH_ENFORCEMENT_POLICY = 0xBA
const TAG_COMPREHENSION_TLV_FILE_UPDATE_INFORMATION = 0xBB
const TAG_COMPREHENSION_TLV_APPLICATION_SPECIFIC_REFRESH_DATA = 0xBB
const TAG_COMPREHENSION_TLV_UICC_TERMINAL_INTERFACE_TRANSPORT_LEVEL = 0xBC
const TAG_COMPREHENSION_TLV_OTHER_ADDRESS = 0xBE
const TAG_COMPREHENSION_TLV_ACCESS_TECHNOLOGY = 0xBF
const TAG_COMPREHENSION_TLV_DISPLAY_PARAMETERS = 0xC0
const TAG_COMPREHENSION_TLV_DNS_SERVER_ADDRESS = 0xC0
const TAG_COMPREHENSION_TLV_SERVICE_RECORD = 0xC1
const TAG_COMPREHENSION_TLV_DEVICE_FILTER = 0xC2
const TAG_COMPREHENSION_TLV_SERVICE_SEARCH = 0xC3
const TAG_COMPREHENSION_TLV_ATTRIBUTE_INFORMATION = 0xC4
const TAG_COMPREHENSION_TLV_SERVICE_AVAILABILITY = 0xC5
const TAG_COMPREHENSION_TLV_3GPP2TAG1 = 0xC6
const TAG_COMPREHENSION_TLV_NETWORK_ACCESS_NAME = 0xC7
const TAG_COMPREHENSION_TLV_3GPP2TAG2 = 0xC8
const TAG_COMPREHENSION_TLV_REMOTE_ENTITY_ADDRESS = 0xC9
const TAG_COMPREHENSION_TLV_I_WLAN_IDENTIFIER = 0xCA
const TAG_COMPREHENSION_TLV_SSID = 0xCA
const TAG_COMPREHENSION_TLV_I_WLAN_ACCESS_STATUS = 0xCB
const TAG_COMPREHENSION_TLV_TEXT_ATTRIBUTE = 0xD0
const TAG_COMPREHENSION_TLV_ITEM_TEXT_ATTRIBUTE = 0xD1
const TAG_COMPREHENSION_TLV_PDP_CONTEXT_ACTIVATION_PARAMETER = 0xD2
const TAG_COMPREHENSION_TLV_CONTACTLESS_STATE_REQUEST = 0xD3
const TAG_COMPREHENSION_TLV_CONTACTLESS_FUNCTIONALITY_STATE = 0xD4
const TAG_COMPREHENSION_TLV_CSG_CELL_SELECTION_STATUS = 0xD5
const TAG_COMPREHENSION_TLV_IMS_CALL_DISCONNECTION_CAUSE = 0xD5
const TAG_COMPREHENSION_TLV_CSG_ID = 0xD6
const TAG_COMPREHENSION_TLV_HNB_NAME = 0xD7
const TAG_COMPREHENSION_TLV_EXTENDED_REJECTION_CAUSE_CODE = 0xD7
const TAG_COMPREHENSION_TLV_MAC = 0xE0
const TAG_COMPREHENSION_TLV_3GPP2TAG3 = 0xE1
const TAG_COMPREHENSION_TLV_IMEISV = 0xE2
const TAG_COMPREHENSION_TLV_BATTERY_STATE = 0xE3
const TAG_COMPREHENSION_TLV_BROWSING_STATUS = 0xE4
const TAG_COMPREHENSION_TLV_NETWORK_SEARCH_MODE = 0xE5
const TAG_COMPREHENSION_TLV_FRAME_LAYOUT = 0xE6
const TAG_COMPREHENSION_TLV_FRAMES_INFORMATION = 0xE7
const TAG_COMPREHENSION_TLV_PROFILE_ID = 0xE7
const TAG_COMPREHENSION_TLV_FRAME_IDENTIFIER = 0xE8
const TAG_COMPREHENSION_TLV_UTRAN_E_UTRAN_MEASUREMENT_QUALIFIER = 0xE9
const TAG_COMPREHENSION_TLV_MULTIMEDIA_MESSAGE_REFERENCE = 0xEA
const TAG_COMPREHENSION_TLV_MULTIMEDIA_MESSAGE_IDENTIFIER = 0xEB
const TAG_COMPREHENSION_TLV_MULTIMEDIA_MESSAGE_TRANSFER_STATUS = 0xEC
const TAG_COMPREHENSION_TLV_3GPP2TAG4 = 0xED
const TAG_COMPREHENSION_TLV_MULTIMEDIA_MESSAGE_CONTENT_IDENTIFIER = 0xEE
const TAG_COMPREHENSION_TLV_MULTIMEDIA_MESSAGE_NOTIFICATION = 0xEF
const TAG_COMPREHENSION_TLV_LAST_ENVELOPE = 0xF0
const TAG_COMPREHENSION_TLV_REGISTRY_APPLICATION_DATA = 0xF1
const TAG_COMPREHENSION_TLV_PLMNWACT_LIST = 0xF2
const TAG_COMPREHENSION_TLV_ROUTING_AREA_INFORMATION = 0xF3
const TAG_COMPREHENSION_TLV_URI_TRUNCATED = 0xF3
const TAG_COMPREHENSION_TLV_UPDATE_ATTACH_TYPE = 0xF4
const TAG_COMPREHENSION_TLV_PROSE_REPORT_DATA = 0xF4
const TAG_COMPREHENSION_TLV_REJECTION_CAUSE_CODE = 0xF5
const TAG_COMPREHENSION_TLV_GEOGRAPHICAL_LOCATION_PARAMETERS = 0xF6
const TAG_COMPREHENSION_TLV_IARI = 0xF6
const TAG_COMPREHENSION_TLV_GAD_SHAPES = 0xF7
const TAG_COMPREHENSION_TLV_IMPU_LIST = 0xF7
const TAG_COMPREHENSION_TLV_NMEA_SENTENCE = 0xF8
const TAG_COMPREHENSION_TLV_IMS_STATUS_CODE = 0xF8
const TAG_COMPREHENSION_TLV_PLMN_LIST = 0xF9
const TAG_COMPREHENSION_TLV_E_UTRAN_INTER_FREQUENCY_NETWORK_MEASUREMENT_RESULTS = 0xF9
const TAG_COMPREHENSION_TLV_BROADCAST_NETWORK_INFORMATION = 0xFA
const TAG_COMPREHENSION_TLV_EXTENDED_REGISTRY_APPLICATION_DATA = 0xFA
const TAG_COMPREHENSION_TLV_ACTIVATE_DESCRIPTOR = 0xFB
const TAG_COMPREHENSION_TLV_EPS_PDN_CONNECTION_ACTIVATION_PARAMETERS = 0xFC
const TAG_COMPREHENSION_TLV_TRACKING_AREA_IDENTIFICATION = 0xFD
const TAG_COMPREHENSION_TLV_CSG_ID_LIST = 0xFE
const TAG_COMPREHENSION_TLV_MEDIA_TYPE = 0xFE

var mapComprehensionTlv = new Map(
    [
        [TAG_COMPREHENSION_TLV_ADDRESS, ["Address", printAddress]],
        [TAG_COMPREHENSION_TLV_COMMAND_DETAIL, ["Command detail", printCommandDetail]],
        [TAG_COMPREHENSION_TLV_DEVICE_IDENTITY, ["Device identities", printDeviceIdentity]],
        [TAG_COMPREHENSION_TLV_DURATION, ["Duration", printDuration]],
        [TAG_COMPREHENSION_TLV_RESULT, ["Result", printResult]],
        [TAG_COMPREHENSION_TLV_TEXT_STRING, ["Text String", printTextString]]
    ]
)

const TAG_DISPLAY_TEXT = 0x21

var mapProactive = new Map(
    [
        [TAG_DISPLAY_TEXT,
            [
                "DISPLAY TEXT",
                [
                    TAG_COMPREHENSION_TLV_COMMAND_DETAIL,
                    TAG_COMPREHENSION_TLV_DEVICE_IDENTITY,
                    TAG_COMPREHENSION_TLV_TEXT_STRING,
                    TAG_COMPREHENSION_TLV_DURATION,
                    TAG_COMPREHENSION_TLV_ITEM_TEXT_ATTRIBUTE,
                    TAG_COMPREHENSION_TLV_FRAME_IDENTIFIER
                ]
            ]
        ]
    ]
)

function log(str) {
    if (false) {
        console.log(str)
    }
}

function print(l, r, table) {
    var row = table.insertRow()
    var cellRaw = row.insertCell()
    var cellDecoded = row.insertCell()

    cellRaw.innerHTML = l
    cellRaw.style.textAlign = "center"
    cellRaw.style.width = "8%"

    cellDecoded.innerHTML = r
}

function printCat(cat, table) {
    for(var i = table.rows.length - 1; i >= 0; i--) {
        table.deleteRow(i)
    }

    mapBerTlv.get(cat.tag)
    if (cat.tag == 0xD0) {
        printProactive(cat, table)
    }
}

function printProactive(cat, table) {
    log("printProactive()")

    var l = toHexString(cat.tag) + "<br>" +
            toHexString(cat.length)
    var r = "Proactive Command" + "<br>" +
            "Length"
    print(l, r, table)

    var comprehension = cat.find(TAG_COMPREHENSION_TLV_COMMAND_DETAIL)
    if (comprehension == null) {
        return
    }

    var proactive = mapProactive.get(comprehension.value[1])
    if (proactive == null) {
        return
    }

    proactive[1].forEach(value => {
        printComprehensionTlv(value, cat, table)
    })
}

function printComprehensionTlv(tag, cat, table) {
    var mapValue = mapComprehensionTlv.get(tag)
    if (mapValue != null) {
        var tlv = cat.find(tag)
        if (tlv != null) {
            mapValue[1](tlv, table)
        }
    }
}

function printDuration(tlv, table) {
    var l = toHexString(tlv.tag) + "<br>" +
            toHexString(tlv.length) + "<br>"
    tlv.value.forEach(value => {
        l += toHexString(value) + "<br>"
    })

    var r = mapComprehensionTlv.get(tlv.tag)[0] + "<br>" +
            "Length" + "<br>"
    if (tlv.value[0] == "0x00") {
        r += "minutes" + "<br>"
    }
    else if (tlv.value[0] == "0x01") {
        r += "seconds" + "<br>"
    }
    else if (tlv.value[0] == "0x02") {
        r += "tenths of seconds" + "<br>"
    }

    r += toHexString(tlv.value[1])

    print(l, r, table)
}

function printAddress(tlv, table) {
    var l = toHexString(tlv.tag) + "<br>" +
            toHexString(tlv.length) + "<br>"
    tlv.value.forEach(value => {
        l += toHexString(value) + "<br>"
    })

    var r = mapComprehensionTlv.get(tlv.tag)[0] + "<br>" +
            "Length" + "<br>"
    if ((tlv.value[0] & 0x70) == "0x00") {
        r += "Unknown"
    }
    else if ((tlv.value[0] & 0x70) == "0x10") {
        r += "International Number"
    }
    else if ((tlv.value[0] & 0x70) == "0x20") {
        r += "National Number"
    }
    else if ((tlv.value[0] & 0x70) == "0x30") {
        r += "Network Specific Number"
    }
    if ((tlv.value[0] & 0x0F) == "0x00") {
        r += ", Unknown"
    }
    else if ((tlv.value[0] & 0x0F) == "0x01") {
        r += ", ISDN/telephony numbering plan"
    }
    else if ((tlv.value[0] & 0x0F) == "0x03") {
        r += ", Data numbering plan"
    }
    else if ((tlv.value[0] & 0x0F) == "0x04") {
        r += ", Telex numbering plan"
    }
    else if ((tlv.value[0] & 0x0F) == "0x09" ) {
        r += ", Private numbering plan"
    }
    else if ((tlv.value[0] & 0x0F) == "0x0F") {
        r += ", Reserved for extension"
    }

    print(l, r, table)
}

function printResult(tlv, table) {
    var l = tlv.tag.toString(16) + "<br>" +
            tlv
}

function printTextString(tlv, table) {
    var l = toHexString(tlv.tag) + "<br>" +
            toHexString(tlv.length) + "<br>" +
            toHexString(tlv.value[0]) + "<br>"


    var r = mapComprehensionTlv.get(tlv.tag)[0] + "<br>" +
            "Length" + "<br>"
    if (tlv.value[0] == 0x00) {
        r += "GSM default alphabet 7 bits packed"
    }
    else if (tlv.value[0] == 0x04) {
        r += "GSM default alphabet 8 bits"
    }
    else if (tlv.value[0] == 0x08) {
        r += "UCS2"
    }
    print(l, r, table)
}

function printDeviceIdentity(tlv, table) {
    var l = toHexString(tlv.tag) + "<br>" +
            toHexString(tlv.length) + "<br>" +
            toHexString(tlv.value[0]) + "<br>" +
            toHexString(tlv.value[1])
    var r = "Device identities" + "<br>" +
            "Length" + "<br>"
    di = function(value) {
        if (value == 0x01) {
            return "Keypad"
        }
        else if (value == 0x02) {
            return "Display"
        }
        else if (value == 0x03) {
            return "Earpiece"
        }
        else if (value == 0x10 || value == 0x17) {
            return "Additional Card Reader"
        }
        else if (value == 0x21 || value == 0x27) {
            return "Channel with Channel identifier"
        }
        else if (value == 0x31 || value == 0x3F) {
            return "eCAT client identifier"
        }
        else if (value == 0x81) {
            return "UICC"
        }
        else if (value == 0x82) {
            return "terminal"
        }
        else if (value == 0x83) {
            return "network"
        }
        else {
            return "reserved"
        }
    }
    r += di(tlv.value[0]) + "<br>"
    r += di(tlv.value[1])

    print(l, r, table)
}

function printCommandDetail(tlv, table) {
    var l = toHexString(tlv.tag) + "<br>" +
            toHexString(tlv.length) + "<br>"
    for (var i = 0; i < tlv.value.length; i++) {
        l += toHexString(tlv.value[i]) + "<br>"
    }

    var r = mapComprehensionTlv.get(tlv.tag)[0] + "<br>" +
            "Length" + "<br>" +
            "Command Number" + "<br>"
    switch (tlv.value[1]) {
        case 0x01:
            r += "REFRESH" + "<br>"
            if (tlv.value[2] == 0x00) {
                r += "NAA Initialization and Full File Change Notification" + "<br>"
            }
            else if (tlv.value[2] == 0x01) {
                r += "File Change Notification" + "<br>"
            }
            else if (tlv.value[2] == 0x02) {
                r += "NAA Initialization and File Change Notification" + "<br>"
            }
            else if (tlv.value[2] == 0x03) {
                r += "NAA Initialization" + "<br>"
            }
            else if (tlv.value[2] == 0x04) {
                r += "UICC Reset" + "<br>"
            }
            else if (tlv.value[2] == 0x05) {
                r += "NAA Application Reset, only applicable for a 3G platform" + "<br>"
            }
            else if (tlv.value[2] == 0x06) {
                r += "NAA Session Reset, only applicable for a 3G platform" + "<br>"
            }
            else if (tlv.value[2] == 0x07) {
                r += "Reserved by 3GPP (\"Steering of Roaming\" REFRESH support)" + "<br>"
            }
            else if (tlv.value[2] == 0x08) {
                r += "Reserved by 3GPP (Steering of Roaming for I-WLAN" + "<br>"
            }
            else if (tlv.value[2] == 0x09) {
                r += "eUICC Profile State Change" + "<br>"
            }
            else if (tlv.value[2] == 0x0A) {
                r += "Application Update" + "<br>"
            }
            else {
                r += "reserved values" + "<br>"
            }
            break

        case 0x02:
            r += "MORE TIME" + "<br>"
            r += "RFU"
            break

        case 0x03:
            r += "POLL INTERVAL" + "<br>"
            r += "RFU"
            break

        case 0x04:
            r += "POLLING OFF" + "<br>"
            r += "RFU"
            break

        case 0x05:
            r += "SET UP EVENT LIST" + "<br>"
            r += "RFU"
            break

        case 0x10:
            r += "SET UP CALL" + "<br>"
            if (tlv.value[2] == 0x00) {
                r += "set up call, but only if not currently busy on another call" + "<br>"
            }
            else if (tlv.value[2] == 0x01) {
                r += "set up call, but only if not currently busy on another call, with redial" + "<br>"
            }
            else if (tlv.value[2] == 0x02) {
                r += "set up call, putting all other calls (if any) on hold" + "<br>"
            }
            else if (tlv.value[2] == 0x03) {
                r += "set up call, putting all other calls (if any) on hold, with redial" + "<br>"
            }
            else if (tlv.value[2] == 0x04) {
                r += "set up call, disconnecting all other calls (if any)" + "<br>"
            }
            else if (tlv.value[2] == 0x05) {
                r += "set up call, disconnecting all other calls (if any), with redial" + "<br>"
            }
            else {
                r += "reserved values"
            }
            break

        case 0x11:
            r += "SEND SS" + "<br>"
            break

        case 0x12:
            r += "SEND USSD" + "<br>"
            break

        case 0x13:
            r += "SEND SHORT MESSAGE" + "<br>"
            if ((tlv.value[2] & 0x01) == 0x00) {
                r += "packing not required"
            }
            else if ((tlv.value[2] & 0x01) == 0x01) {
                r += "SMS packing by the terminal required"
            }
            else {
                r += "RFU"
            }
            break

        case 0x14:
            r += "SEND DTMF" + "<br>"
            r += "RFU"
            break

        case 0x15:
            r += "LAUNCH BROWSER" + "<br>"
            if (tlv.value[2] == 0x00) {
                r += "launch browser if not already launched"
            }
            else if (tlv.value[2] == 0x01) {
                r += "not used"
            }
            else if (tlv.value[2] == 0x02) {
                r += "use the existing browser (the browser shall not use the active existing secured session)"
            }
            else if (tlv.value[2] == 0x03) {
                r += "close the existing browser session and launch new browser session"
            }
            else if (tlv.value[2] == 0x04) {
                r += "not used"
            }
            else {
                r += "RFU"
            }
            break

        case 0x16:
            r += "GEOGRAPHICAL LOCATION REQUEST" + "<br>"
            break

        case 0x20:
            r += "PLAY TONE" + "<br>"
            if ((tlv.value[2] & 0x01) == 0x00) {
                r += "use of vibrate alert is up to the terminal"
            }
            else if ((tlv.value[2] & 0x01) == 0x01) {
                r += "vibrate alert, if available, with the tone"
            }
            else {
                r += "RFU"
            }
            break

        case 0x21:
            r += "DISPLAY TEXT" + "<br>"
            if ((tlv.value[2] & 0x01) == 0x00) {
                r += "normal priority"
            }
            else if ((tlv.value[2] & 0x01) == 0x01) {
                r += "high priority"
            }
            if ((tlv.value[2] & 0x80) == 0x00) {
                r += ", clear message after a delay"
            }
            else if ((tlv.value[2] & 0x80) == 0x80) {
                r += ", wait for user to clear message"
            }
            break

        case 0x22:
            r += "GET INKEY" + "<br>"
            if ((tlv.value[2] & 0x01) == 0x00) {
                r += "digits (0 to 9, *, # and +) only"
            }
            else if ((tlv.value[2] & 0x01) == 0x01) {
                r += "alphabet set"
            }
            if ((tlv.value[2] & 0x02) == 0x00) {
                r += ", SMS default alphabet"
            }
            else if ((tlv.value[2] & 0x02) == 0x02) {
                r += ", UCS2 alphabet"
            }
            if ((tlv.value[2] & 0x04) == 0x00) {
                r += ", character sets defined by bit 1 and bit 2 are enabled"
            }
            else if ((tlv.value[2] & 0x04) == 0x04) {
                r += ", character sets defined by bit 1 and bit 2 are disabled and the \"Yes/No\" response is requested"
            }
            if ((tlv.value[2] & 0x08) == 0x00) {
                r += ", user response shall be displayed. The terminal may allow alteration and/or confirmation"
            }
            else if ((tlv.value[2] & 0x08) == 0x08) {
                r += ", an immediate digit response (0 to 9, * and #) is requested"
            }
            if ((tlv.value[2] & 0x80) == 0x00) {
                r += ", no help information available"
            }
            else if ((tlv.value[2] & 0x80) == 0x80) {
                r += ", help information available"
            }

            break

        case 0x23:
            r += "GET INPUT" + "<br>"
            if ((tlv.value[2] & 0x01) == 0x00) {
                r += "digits (0 to 9, *, #, and +) only"
            }
            else if ((tlv.value[2] & 0x01) == 0x01) {
                r += "alphabet set"
            }
            if ((tlv.value[2] & 0x02) == 0x00) {
                r += ", SMS default alphabet"
            }
            else if ((tlv.value[2] & 0x02) == 0x02) {
                r += ", UCS2 alphabet"
            }
            if ((tlv.value[2] & 0x04) == 0x00) {
                r += ", terminal may echo user input on the display"
            }
            else if ((tlv.value[2] & 0x04) == 0x04) {
                r += ", user input shall not be revealed in any way"
            }
            if ((tlv.value[2] & 0x08) == 0x00) {
                r += ", user input to be in unpacked format"
            }
            else if ((tlv.value[2] & 0x08) == 0x08) {
                r += ", user input to be in SMS packed format"
            }
            if ((tlv.value[2] & 0x80) == 0x00) {
                r += ", no help information available"
            }
            else if ((tlv.value[2] & 0x80) == 0x80) {
                r += ", help information available"
            }
            break

        case 0x24:
            r += "SELECT ITEM" + "<br>"
            if ((tlv.value[2] & 0x01) == 0x00) {
                r += "presentation type is not specified"
            }
            else if((tlv.value[2] & 0x01) == 0x01) {
                r += "presentation type is specified in bit 2."
            }
            if ((tlv.value[2] & 0x02) == 0x00) {
                r += ", presentation as a choice of data values if bit 1 = \'1\'"
            }
            else if ((tlv.value[2] & 0x02) == 0x02) {
                r += ", presentation as a choice of navigation options if bit 1 is \'1\'"
            }
            if ((tlv.value[2] & 0x04) == 0x00) {
                r += ", no selection preference"
            }
            else if ((tlv.value[2] & 0x04) == 0x04) {
                r += ", selection using soft key preferred"
            }
            if ((tlv.value[2] & 0x80) == 0x00) {
                r += ", no help information available"
            }
            else if ((tlv.value[2] & 0x80) == 0x80) {
                r += ", help information available"
            }
            break

        case 0x25:
            r += "SET UP MENU" + "<br>"
            if ((tlv.value[2] & 0x01) == 0x00) {
                r += "no selection preference"
            }
            else if ((tlv.value[2] & 0x01) == 0x01) {
                r += "selection using soft key preferred"
            }
            if ((tlv.value[2] & 0x80) == 0x00) {
                r += ", no help information available"
            }
            else if ((tlv.value[2] & 0x80) == 0x80) {
                r += ", help information available"
            }
            break

        case 0x26:
            r += "PROVIDE LOCALINFORMATION" + "<br>"
            if (tlv.value[2] == 0x00) {
                r += "Location Information according to current NAA"
            }
            else if (tlv.value[2] == 0x01) {
                r += "IMEI of the terminal"
            }
            else if (tlv.value[2] == 0x02) {
                r += "Network Measurement results according to current NAA"
            }
            else if (tlv.value[2] == 0x03) {
                r += "Date, time and time zone"
            }
            else if (tlv.value[2] == 0x04) {
                r += "Language setting"
            }
            else if (tlv.value[2] == 0x05) {
                r += "Reserved for GSM"
            }
            else if (tlv.value[2] == 0x06) {
                r += "Access Technology (single access technology)"
            }
            else if (tlv.value[2] == 0x07) {
                r += "ESN of the terminal"
            }
            else if (tlv.value[2] == 0x08) {
                r += "IMEISV of the terminal"
            }
            else if (tlv.value[2] == 0x09) {
                r += "Search Mode"
            }
            else if (tlv.value[2] == 0x0A) {
                r += "Charge State of the Battery (if class \"g\" is supported)"
            }
            else if (tlv.value[2] == 0x0B) {
                r += "MEID of the terminal"
            }
            else if (tlv.value[2] == 0x0C) {
                r += "reserved for 3GPP (current WSID)"
            }
            else if (tlv.value[2] == 0x0D) {
                r += "Broadcast Network information according to current Broadcast Network Technology used"
            }
            else if (tlv.value[2] == 0x0E) {
                r += "Multiple Access Technologies"
            }
            else if (tlv.value[2] == 0x0F) {
                r += "Location Information for multiple access technologies"
            }
            else if (tlv.value[2] == 0x10) {
                r += "Network Measurement results for multiple access technologies"
            }
            else if (tlv.value[2] == 0x11) {
                r += "Supported Radio Access Technologies"
            }
            else if (tlv.value[2] == 0x12) {
                r += "reserved for 3GPP (H(e)NB IP address)"
            }
            else if (tlv.value[2] == 0x13) {
                r += "reserved for 3GPP (H(e)NB surrounding macrocells)"
            }
            else if (tlv.value[2] == 0x14) {
                r += "reserved for 3GPP (current WLAN identifier)"
            }
            else if (tlv.value[2] == 0x15) {
                r += "reserved for 3GPP (for future usage)"
            }
            else if (tlv.value[2] == 0x16) {
                r += "reserved for 3GPP (for future usage)"
            }
            else if (tlv.value[2] == 0x17) {
                r += "reserved for 3GPP (for future usage)"
            }
            else if (tlv.value[2] == 0x18) {
                r += "reserved for 3GPP (for future usage)"
            }
            else if (tlv.value[2] == 0x19) {
                r += "reserved for 3GPP (for future usage)"
            }
            else {
                r += "Reserved"
            }
            break

        case 0x27:
            r += "TIMER MANAGEMENT" + "<br>"
            if ((tlv.value[2] & 0x03) == 0x00) {
                r += "start"
            }
            else if ((tlv.value[2] & 0x03) == 0x01) {
                r += "deactivate"
            }
            else if ((tlv.value[2] & 0x03) == 0x02) {
                r += "get current value"
            }
            else if ((tlv.value[2] & 0x03) == 0x03) {
                r += "RFU"
            }
            break

        case 0x28:
            r += "SET UP IDLE MODE TEXT" + "<br>"
            break

        case 0x30:
            r += "PERFORM CARD APDU" + "<br>"
            r += "RFU"
            break

        case 0x31:
            r += "POWER ON CARD" + "<br>"
            r += "RFU"
            break

        case 0x32:
            r += "POWER OFF CARD" + "<br>"
            r += "RFU"
            break

        case 0x33:
            r += "GET READER STATUS" + "<br>"
            if (tlv.value[2] == 0x00) {
                r += "Card reader status"
            }
            else if (tlv.value[2] == 0x01) {
                r += "Card reader identifier"
            }
            else {
                r += "Reserved"
            }
            break

        case 0x34:
            r += "RUN AT COMMAND" + "<br>"
            r += "RFU"
            break

        case 0x35:
            r += "LANGUAGE NOTIFICATION" + "<br>"
            if ((tlv.value[2] & 0x01) == 0x00) {
                r += "non-specific language notification"
            }
            else if ((tlv.value[2] & 0x01) == 0x01) {
                r += "specific language notification"
            }
            break

        case 0x40:
            r += "OPEN CHANNEL" + "<br>"
            if ((tlv.value[2] & 0x01) == 0x00) {
                r += "on demand link establishment"
            }
            else if ((tlv.value[2] & 0x01) == 0x01) {
                r += "immediate link establishment"
            }
            if ((tlv.value[2] & 0x02) == 0x00) {
                r += ", no automatic reconnection"
            }
            else if ((tlv.value[2] & 0x02) == 0x02) {
                r += ", automatic reconnection"
            }
            if ((tlv.value[2] & 0x04) == 0x00) {
                r += ", no background mode"
            }
            else if ((tlv.value[2] & 0x04) == 0x04) {
                r += ", immediate link establishment in background mode (bit 1 is ignored)"
            }
            if ((tlv.value[2] & 0x08) == 0x00) {
                r += ", no DNS server address(es) requested"
            }
            else if ((tlv.value[2] & 0x08) == 0x08) {
                r += ", DNS server address(es) requested (for packet data service only)"
            }
            break

        case 0x41:
            r += "CLOSE CHANNEL" + "<br>"
            r += "RFU"
            break

        case 0x42:
            r += "RECEIVE DATA" + "<br>"
            break

        case 0x44:
            r += "GET CHANNEL STATUS" + "<br>"
            r += "RFU"
            break

        case 0x45:
            r += "SERVICE SEARCH" + "<br>"
            r += "RFU"
            break

        case 0x46:
            r += "GET SERVICE INFORMATION" + "<br>"
            r += "RFU"
            break

        case 0x47:
            r += "DECLARE SERVICE" + "<br>"
            if ((tlv.value[2] & 0x01) == 0x00) {
                r += "add a new service to the terminal service database"
            }
            else if ((tlv.value[2] & 0x01) == 0x01) {
                r += "delete a service from the terminal service database"
            }
            break

        case 0x50:
            r += "SET FRAMES" + "<br>"
            if (tlv.value[2] == 0x00) {
                r += "This value tells the terminal to draw a separator between every adjoining frame"
            }
            else if (tlv.value[2] == 0x01) {
                r += "This value tells the terminal not to draw a separator between every adjoining frame"
            }
            break

        case 0x51:
            r += "GET FRAMES STATUS" + "<br>"
            r += "RFU"
            break

        case 0x60:
            r += "(RETRIEVE MULTIMEDIA MESSAGE)" + "<br>"
            break

        case 0x61:
            r += "(SUBMIT MULTIMEDIA MESSAGE)" + "<br>"
            break

        case 0x62:
            r += "DISPLAY MULTIMEDIA MESSAGE" + "<br>"
            if ((tlv.value[2] & 0x01) == 0x00) {
                r += "normal priority"
            }
            else if ((tlv.value[2] & 0x01) == 0x01) {
                r += "high priority"
            }
            if ((tlv.value[2] & 0x80) == 0x00) {
                r += "clear message after a delay"
            }
            else if ((tlv.value[2] & 0x80) == 0x80) {
                r += "wait for user to clear message"
            }
            break

        case 0x70:
            r += "ACTIVATE" + "<br>"
            r += "RFU"
            break

        case 0x71:
            r += "CONTACTLESS STATE CHANGED" + "<br>"
            r += "RFU"
            break

        case 0x72:
            r += "COMMAND CONTAINER" + "<br>"
            r += "RFU"
            break

        case 0x73:
            r += "ENCAPSULATED SESSION CONTROL" + "<br>"
            if (tlv.value[2] == 0x00) {
                r += "end encapsulated command session"
            }
            else if (tlv.value[2] == 0x01) {
                r += "request Master SA setup"
            }
            else if (tlv.value[2] == 0x02) {
                r += "request Connection SA setup"
            }
            else if (tlv.value[2] == 0x03) {
                r += "request Secure Channel Start"
            }
            else if (tlv.value[2] == 0x04) {
                r += "close Master and Connection SA, keep encapsulated command session"
            }
            else {
                r += "RFU"
            }
            break

        case 0x74:
            r += "eUICC OPERATION" + "<br>"
            if (tlv.value[2] == 0x00) {
                r += "Profile is created"
            }
            else if (tlv.value[2] == 0x01) {
                r += "Profile is deleted"
            }
            else {
                r += "RFU"
            }
            break

        case 0x81:
            r += "End of the proactive UICC session" + "<br>"
            break

        default:
            r += "UNDEFINED" + "<br>"
            break
    }

    print(l, r, table)
}

function Cat() {
}

Cat.prototype.parse = function(data) {
    if (!data.match(/^([a-zA-Z0-9]+)$/)) {
        throw "data is not alphanumeric"
    }

    data = hexStringToBytes(data)
    if (data == null) {
        throw "data is not valid"
    }

    var bertlv = new BerTlv(data).decode()
    this.tag = bertlv.tag
    this.length = bertlv.length
    this.value = bertlv.value

    log("Cat parse() tag: " + this.tag +
        ", length: " + this.length +
        ", value: " + this.value)
    this.comprehensions = new ComprehensionTlv().parse(this.value)
}

Cat.prototype.find = function(tag) {
    for (var i = 0; i < this.comprehensions.length; i++) {
        if (this.comprehensions[i].tag == tag) {
            return this.comprehensions[i]
        }
    }

    return null
}

function ComprehensionTlv() {
}

ComprehensionTlv.prototype.parse = function(data) {
    var tlvs = new Array()

    var idx = 0
    while (idx < data.length) {
        var tlv = new ComprehensionTlv()

        var temp = data[idx++] & 0xFF
        switch (temp) {
        case 0:
        case 0xFF:
        case 0x80:
            throw "ComprehenstionTlv tag is not valid: " + temp

        case 0x7F:
            tlv.cr = (data[idx] & 0x80) != 0
            tlv.tag = (((data[idx++] /*& ~0x80*/) & 0xFF) << 8) | (data[idx++] & 0xFF)
            break

        default:
            tlv.cr = (temp & 0x80) != 0
            tlv.tag = (temp /*& ~0x80*/) & 0xFF
        }

        log("ComprehensionTlv parse() tag: 0x" + tlv.tag.toString(16))

        temp = data[idx++] & 0xFF
        if (temp < 0x80) {
            tlv.length = temp
        }
        else if (temp == 0x81) {
            tlv.length = data[idx++] & 0xFF
            if (tlv.length < 0x80) {
                throw "ComprehensionTlv length is not valid: " + temp + " " + tlv.length
            }
        }
        else if (temp == 0x82) {
            tlv.length = (((data[idx++] & 0xFF) << 8) | (data[idx++] & 0xFF))
            if (tlv.length < 0x100) {
                throw "ComprehensionTlv length is not valid: " + temp + " " + tlv.length
            }
        }
        else if (temp == 0x83) {
            tlv.length = (((data[idx++] & 0xFF) << 16) |
                          ((data[idx++] & 0xFF) << 8) |
                           (data[idx++] & 0xFF))
            if (tlv.length < 0x10000) {
                throw "ComprehensionTlv length is not valid: " + temp + " " + tlv.length
            }
        }
        else {
            throw "ComprehensionTlv length is not valid: " + temp
        }

        tlv.value = data.slice(idx, idx + tlv.length)
        idx += tlv.length
        log("ComprehensionTlv parse() length: " + tlv.length)
        log("ComprehensionTlv parse() value: " + tlv.value)

        tlvs.push(tlv)
    }

    return tlvs
}

function BerTlv(data) {
    this.data = data
}

BerTlv.prototype.decode = function() {
    if (this.data == null || this.data.length < 2) {
        log("BerTlv decode() data is not valid")
        return null
    }
    log("BerTlv decode() data: " + this.data + ", length: " + this.data.length)

    try {
        var idx = 0
        this.tag = this.data[idx++]

        if ((this.tag & 0xF0) != 0xD0) {
            throw "tag is not valid"
        }

        log("BerTlv decode() tag: " + this.tag)

        var temp = this.data[idx++]
        if (temp < 0x80) {
            this.length = temp
        }
        else if (temp == 0x80) {
            temp = this.data[idx++]
            if (temp < 0x80 || temp > 0xFF) {
                throw "length is not valid"
            }
            this.length = temp
        }
        else {
            throw "length is not valid"
        }

        log("BerTlv decode() length: " + this.length)
        if (this.data.length - idx != this.length) {
            throw "length of value is not matched"
        }

        this.value = this.data.slice(idx, this.data.length)
        log("BerTlv decode() value: " + this.value)
    }
    catch (e) {
        log("BerTlv decode() " + e)
    }

    return this
}

function toHexString(b) {
    var s = b.toString(16).toUpperCase()

    if (s.length % 2 == 1) {
        s = "0".concat(s)
    }

    return s
}

function hexStringToBytes(s) {
    if (s == null || s.length % 2 != 0) {
        log("hexStringToBytes() " + s)
        return null
    }
    s = s.toUpperCase()
    var b = new Array(s.length / 2)
    for (var i = 0; i < s.length / 2; i++ ) {
        b[i] = Number("0x" + s.substr(i * 2, 2))
    }

    return b
}
