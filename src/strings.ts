/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 * 
 * @author mebjas <minhazav@gmail.com>
 * 
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `QR code parse error, error = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        return `Error getting userMedia, error = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        return "The device doesn't support navigator.mediaDevices , only "
        + "supported cameraIdOrConfig in this case is deviceId parameter "
        + "(string).";
    }

    public static cameraStreamingNotSupported(): string {
        return "Camera streaming not supported by the browser.";
    }

    public static unableToQuerySupportedDevices(): string {
        return "Unable to query supported devices, unknown error.";
    }

    public static insecureContextCameraQueryError(): string {
        return "Camera access is only supported in secure context like https "
        + "or localhost.";
    }

    public static scannerPaused(): string {
        return "Scanner paused";
    }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return "走査";
    }

    public static idleStatus(): string {
        return "アイドル";
    }

    public static errorStatus(): string {
        return "エラー";
    }

    public static permissionStatus(): string {
        return "許可";
    }

    public static noCameraFoundErrorStatus(): string {
        return "カメラなし";
    }

    public static lastMatch(decodedText: string): string {
        return `最後の試合: ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return "コードスキャナー";
    }

    public static cameraPermissionTitle(): string {
        return "カメラ利用を許可";
    }

    public static cameraPermissionRequesting(): string {
        return "カメラの許可をリクエストする...";
    }

    public static noCameraFound(): string {
        return "カメラが見つかりません";
    }

    public static scanButtonStopScanningText(): string {
        return "スキャンを停止する";
    }

    public static scanButtonStartScanningText(): string {
        return "スキャン開始";
    }

    public static torchOnButton(): string {
        return "Switch On Torch";
    }

    public static torchOffButton(): string {
        return "Switch Off Torch";
    }

    public static torchOnFailedMessage(): string {
        return "Failed to turn on torch";
    }

    public static torchOffFailedMessage(): string {
        return "Failed to turn off torch";
    }

    public static scanButtonScanningStarting(): string {
        return "カメラの起動...";
    }

    /**
     * Text to show when camera scan is selected.
     * 
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return "画像ファイルからスキャン";
    }

    /**
     * Text to show when file based scan is selected.
     * 
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return "カメラを使用して直接スキャンする";
    }

    public static selectCamera(): string {
        return "カメラを選択";
    }

    public static fileSelectionChooseImage(): string {
        return "画像の選択";
    }

    public static fileSelectionChooseAnother(): string {
        return "ほかを選ぶ";
    }

    public static fileSelectionNoImageSelected(): string {
        return "画像が選択されていません";
    }

    /** Prefix to be given to anonymous cameras. */
    public static anonymousCameraPrefix(): string {
        return "Anonymous Camera";
    }

    public static dragAndDropMessage(): string {
        return "または画像をドロップしてスキャンします";
    }

    public static dragAndDropMessageOnlyImages(): string {
        return "または、スキャンする画像をドロップします (他のファイルはサポートされていません)";
    }

    /** Value for zoom. */
    public static zoom(): string {
        return "zoom";
    }

    public static loadingImage(): string {
        return "画像の読み込み中...";
    }

    public static cameraScanAltText(): string {
        return "Camera based scan";
    }

    public static fileScanAltText(): string {
        return "Fule based scan";
    }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {

    public static poweredBy(): string {
        return "Powered by ";
    }

    public static reportIssues(): string {
        return "Report issues";
    }
}
