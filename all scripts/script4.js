  document.getElementById("w1").style.cursor = "none";
  document.getElementById("w1").style.overflow = "hidden";
  // document.getElementById("body1").style.overflowY = "hidden";
  document.getElementById("a2").style.opacity = "0";
  document.getElementById("corning").style.display = "none";
  // document.getElementById("1pg").style.display = "none";
  // document.getElementById("2pg").style.display = "none";
  var textarea = $('.term');
var speed = 50; //Writing speed in milliseconds
var text = 'sh admin_website.sh';

var i = 0;

runner();

function runner() {
  textarea.append(text.charAt(i));
  i++;
  setTimeout(
    function() {
      if (i < text.length)
        runner();
      else {
        textarea.append("<br>")
        document.getElementById("s1").scrollTo(0, document.body.scrollHeight);  
        // document.getElementById("s1").scrollIntoView();
        i = 0;
        setTimeout(function() {feedbacker();}, 1000);
      }
    }, Math.floor(Math.random() * 220) + 50);
}

var count = 0;
var time = 1;
function feedbacker() {
  textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  document.getElementById("s1").scrollTo(0, document.body.scrollHeight);  
  // document.getElementById("s1").scrollIntoView();
  if (time % 2 == 0) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    document.getElementById("s1").scrollTo(0, document.body.scrollHeight);  
    // document.getElementById("s1").scrollIntoView();
  }
  if (time == 3) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    document.getElementById("s1").scrollTo(0, document.body.scrollHeight);  
    // document.getElementById("s1").scrollIntoView();
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    document.getElementById("s1").scrollTo(0, document.body.scrollHeight);  
    // document.getElementById("s1").scrollIntoView();
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    document.getElementById("s1").scrollTo(0, document.body.scrollHeight);  
    // document.getElementById("s1").scrollIntoView();
  }
  // window.scrollTo(-9999990, document.body.scrollHeight);  
    // window.scrollTo(-999999990, document.body.scrollWidth);
    // window.scrollTo(100000, document.getElementById("s1").scrollHeight);    
  document.getElementById("s1").scrollTo(0, document.body.scrollHeight);  
  i++;
  time = Math.floor(Math.random() * 4) + 1;
  count += time;
  setTimeout(
    function() {
      if (i < output.length - 2)
        feedbacker();
      else {
        textarea.append("<br>Booting...<br>");
          document.getElementById("s1").scrollTo(0, document.body.scrollHeight); 
        setTimeout(function() {$(".load").fadeOut(1000);}, 2500); 
        
        document.getElementById("w1").style.overflow = "auto";
        document.getElementById("w1").style.overflowX = "hidden";
        document.getElementById("a1").scrollIntoView();
        document.getElementById("a2").style.opacity = "1";
        // document.getElementById("1pg").style.display = "flex";
      }
    },time);
}

var output = ["CPU0 microcode updated early to revision 0x1b, date = 2014-05-29",
"Initializing cgroup subsys cpuset",
"Initializing cgroup subsys cpu",
"Initializing cgroup subsys cpuacct",
"KERNEL supported cpus:",
"panic(cpu 0 caller 0xffffff7f833c2f63): 'GPU Panic: [<None>] 5 3 7f 0 0 0 0 3 : NVRM[0/1:0:0]: Read Error 0x00000100: CFG 0xffffffff 0xffffffff 0xffffffff, BAR0 0xc0000000 0xffffff80a8666000 0x0a5480a2, D0, P3/4'@/SourceCache/AppleGraphicsControl/AppleGraphicsControl-3.8.6/src/AppleM uxControl/kext/GPUPanic.cpp:127",
"Backtrace (CPU 0), Frame : Return Address",
"0xffffff80979530f0 : 0xffffff800072fe41 ",
"0xffffff8097953170 : 0xffffff7f833c2f63 ",
"0xffffff8097953250 : 0xffffff7f812c2b9f ",
"0xffffff8097953310 : 0xffffff7f8138c18e ",
"0xffffff8097953350 : 0xffffff7f8138c1fe ",
"0xffffff80979533c0 : 0xffffff7f8160b056 ",
"0xffffff80979534f0 : 0xffffff7f813af82d ",
"0xffffff8097953510 : 0xffffff7f812c95f1 ",
"0xffffff80979535c0 : 0xffffff7f812c70fc ",
"0xffffff80979537c0 : 0xffffff7f812c807a ",
"0xffffff80979538a0 : 0xffffff7f82966446 ",
"0xffffff80979538e0 : 0xffffff7f82975dff ",
"0xffffff8097953900 : 0xffffff7f829a4493 ",
"0xffffff8097953930 : 0xffffff7f829a44ed ",
"0xffffff8097953970 : 0xffffff7f8297ba1f ",
"0xffffff80979539c0 : 0xffffff7f82946027 ",
"0xffffff8097953a60 : 0xffffff7f82941da1 ",
"0xffffff8097953a90 : 0xffffff7f8293f873 ",
"0xffffff8097953ad0 : 0xffffff8000cff00c ",
"0xffffff8097953b60 : 0xffffff8000d01163 ",
"0xffffff8097953bc0 : 0xffffff8000cfe9c3 ",
"0xffffff8097953d00 : 0xffffff80007e4a87 ",
"0xffffff8097953e10 : 0xffffff8000733f8c ",
"0xffffff8097953e40 : 0xffffff8000718a93 ",
"0xffffff8097953e90 : 0xffffff80007293bd ",
"0xffffff8097953f10 : 0xffffff80008059fa ",
"0xffffff8097953fb0 : 0xffffff8000836ea6 ",
"      Kernel Extensions in backtrace:",
"         com.apple.nvidia.classic.NVDAResmanTesla(10.0)[796AE430-39FB-3255-8161-D52AFA28 EE2B]@0xffffff7f81272000->0xffffff7f814dbfff",
"            dependency: com.apple.iokit.IOPCIFamily(2.9)[56AD16B5-4F29-3F74-93E7-D492B3966DE2]@0xffffff 7f80f24000",
"            dependency: com.apple.iokit.IONDRVSupport(2.4.1)[E5A48E71-70F5-3B01-81D3-C2B037BBE80A]@0xff ffff7f81262000",
"            dependency: com.apple.iokit.IOGraphicsFamily(2.4.1)[619F6C9F-0461-3BA1-A75F-53BB0F87ACD3]@0 xffffff7f8121b000",
"         com.apple.nvidia.classic.NVDANV50HalTesla(10.0)[7FE40648-F15F-3E18-91E2-FDDDF4C DA355]@0xffffff7f814e6000->0xffffff7f8178ffff",
"            dependency: com.apple.nvidia.classic.NVDAResmanTesla(10.0.0)[796AE430-39FB-3255-8161-D52AFA 28EE2B]@0xffffff7f81272000",
"            dependency: com.apple.iokit.IOPCIFamily(2.9)[56AD16B5-4F29-3F74-93E7-D492B3966DE2]@0xffffff 7f80f24000",
"         com.apple.GeForceTesla(10.0)[3EA67900-B4A9-30BB-964D-0904DA5421CC]@0xffffff7f82 923000->0xffffff7f829f0fff",
"            dependency: com.apple.iokit.IOPCIFamily(2.9)[56AD16B5-4F29-3F74-93E7-D492B3966DE2]@0xffffff 7f80f24000",
"            dependency: com.apple.iokit.IONDRVSupport(2.4.1)[E5A48E71-70F5-3B01-81D3-C2B037BBE80A]@0xff ffff7f81262000",
"            dependency: com.apple.iokit.IOGraphicsFamily(2.4.1)[619F6C9F-0461-3BA1-A75F-53BB0F87ACD3]@0 xffffff7f8121b000",
"            dependency: com.apple.nvidia.classic.NVDAResmanTesla(10.0.0)[796AE430-39FB-3255-8161-D52AFA 28EE2B]@0xffffff7f81272000",
"         com.apple.driver.AppleMuxControl(3.8.6)[BE610379-FAEA-3E8F-B6AF-F92B70B3C5CD]@0 xffffff7f833b4000->0xffffff7f833c7fff",
"            dependency: com.apple.driver.AppleGraphicsControl(3.8.6)[76B001B1-30F1-3D72-B264-85D77B254C 2F]@0xffffff7f833ac000",
"            dependency: com.apple.iokit.IOACPIFamily(1.4)[70E2B65E-A91A-3522-A1A0-79FD63EABB4C]@0xfffff f7f811a9000",
"            dependency: com.apple.iokit.IOPCIFamily(2.9)[56AD16B5-4F29-3F74-93E7-D492B3966DE2]@0xffffff 7f80f24000",
"            dependency: com.apple.iokit.IOGraphicsFamily(2.4.1)[619F6C9F-0461-3BA1-A75F-53BB0F87ACD3]@0 xffffff7f8121b000",
"            dependency: com.apple.driver.AppleBacklightExpert(1.1.0)[42706EB3-1447-3931-A668-FBAC58AAAA 7A]@0xffffff7f833af000",
"",
"BSD process name corresponding to current thread: WindowServer",
"",
"Mac OS version:",
"14C109",
"",
"Kernel version:",
"Darwin Kernel Version 14.1.0: Mon Dec 22 23:10:38 PST 2014; root:xnu-2782.10.72~2/RELEASE_X86_64",
"Kernel UUID: DCF5C2D5-16AE-37F5-B2BE-ED127048DFF5",
"Kernel slide:     0x0000000000400000",
"Kernel text base: 0xffffff8000600000",
"__HIB  text base: 0xffffff8000500000",
"System model name: MacBookPro6,2 (Mac-F22586C8)",
"",
"System uptime in nanoseconds: 274679477799",
"last loaded kext at 37738688547: com.apple.driver.AudioAUUC 1.70 (addr 0xffffff7f82c1c000, size 32768)",
"last unloaded kext at 156755803356: com.apple.driver.AppleUSBUHCI 656.4.1 (addr 0xffffff7f81b15000, size 65536)",
"loaded kexts:",
"com.apple.driver.AudioAUUC 1.70",
"com.apple.driver.AppleHWSensor 1.9.5d0",
"com.apple.driver.AGPM 100.15.5",
"com.apple.filesystems.autofs 3.0",
"com.apple.iokit.IOBluetoothSerialManager 4.3.2f6",
"com.apple.driver.AppleOSXWatchdog 1",
"com.apple.driver.AppleMikeyHIDDriver 124",
"com.apple.driver.AppleMikeyDriver 269.25",
"com.apple.driver.AppleHDA 269.25",
"com.apple.driver.AppleSMCLMU 2.0.7d0",
"com.apple.driver.AppleIntelHDGraphics 10.0.0",
"com.apple.iokit.IOUserEthernet 1.0.1",
"com.apple.Dont_Steal_Mac_OS_X 7.0.0",
"com.apple.driver.AppleUpstreamUserClient 3.6.1",
"com.apple.driver.AppleHWAccess 1",
"com.apple.driver.AppleHV 1",
"com.apple.driver.AppleLPC 1.7.3",
"com.apple.driver.AppleMuxControl 3.8.6",
"com.apple.GeForceTesla 10.0.0",
"com.apple.driver.ACPI_SMC_PlatformPlugin 1.0.0",
"com.apple.iokit.BroadcomBluetoothHostControllerUSBTransport 4.3.2f6",
// "com.apple.driver.AppleIntelHDGraphicsFB 10.0.0",
// "com.apple.driver.AppleSMCPDRC 1.0.0",
// "com.apple.driver.AppleMCCSControl 1.2.11",
// "com.apple.driver.SMCMotionSensor 3.0.4d1",
// "com.apple.driver.AppleUSBTCButtons 240.2",
// "com.apple.driver.AppleUSBTCKeyboard 240.2",
// "com.apple.driver.AppleIRController 327.5",
// "com.apple.AppleFSCompression.AppleFSCompressionTypeDataless 1.0.0d1",
// "com.apple.AppleFSCompression.AppleFSCompressionTypeZlib 1.0.0d1",
// "com.apple.BootCache 35",
// "com.apple.driver.AppleUSBCardReader 3.5.1",
// "com.apple.iokit.SCSITaskUserClient 3.7.3",
// "com.apple.driver.XsanFilter 404",
// "com.apple.iokit.IOAHCIBlockStorage 2.7.0",
// "com.apple.driver.AppleUSBHub 705.4.2",
// "com.apple.driver.AppleFWOHCI 5.5.2",
// "com.apple.iokit.AppleBCM5701Ethernet 10.1.3",
// "com.apple.driver.AirPort.Brcm4331 800.20.24",
// "com.apple.driver.AppleAHCIPort 3.1.0",
// "com.apple.driver.AppleUSBEHCI 705.4.14",

// "com.apple.driver.AppleSmartBatteryManager 161.0.0",
// "com.apple.driver.AppleHPET 1.8",
// "com.apple.driver.AppleRTC 2.0",
// "com.apple.driver.AppleACPIButtons 3.1",
// "com.apple.driver.AppleSMBIOS 2.1",
// "com.apple.driver.AppleACPIEC 3.1",
// "com.apple.driver.AppleAPIC 1.7",
// "com.apple.driver.AppleIntelCPUPowerManagementClient 218.0.0",
// "com.apple.nke.applicationfirewall 161",
// "com.apple.security.quarantine 3",
// "com.apple.security.TMSafetyNet 8",
// "com.apple.driver.AppleIntelCPUPowerManagement 218.0.0",
// "com.apple.AppleGraphicsDeviceControl 3.8.6",
// "com.apple.kext.triggers 1.0",
// "com.apple.iokit.IOSerialFamily 11",

// "com.apple.driver.DspFuncLib 269.25",
// "com.apple.kext.OSvKernDSPLib 1.15",
// "com.apple.iokit.IOSurface 97",
// "com.apple.iokit.IOFireWireIP 2.2.6",
// "com.apple.driver.AppleHDAController 269.25",
// "com.apple.iokit.IOHDAFamily 269.25",
// "com.apple.iokit.IOAudioFamily 203.3",
// "com.apple.vecLib.kext 1.2.0",
// "com.apple.driver.AppleSMBusPCI 1.0.12d1",
// "com.apple.driver.AppleGraphicsControl 3.8.6",
// "com.apple.driver.IOPlatformPluginLegacy 1.0.0",
// "com.apple.iokit.IOBluetoothHostControllerUSBTransport 4.3.2f6",
// "com.apple.iokit.IOBluetoothFamily 4.3.2f6",
// "com.apple.nvidia.classic.NVDANV50HalTesla 10.0.0",
// "com.apple.nvidia.classic.NVDAResmanTesla 10.0.0",
// "com.apple.driver.IOPlatformPluginFamily 5.8.1d38",
// "com.apple.iokit.IOUSBUserClient 705.4.0",
// "com.apple.driver.AppleBacklightExpert 1.1.0",
// "com.apple.iokit.IONDRVSupport 2.4.1",
// "com.apple.driver.AppleSMBusController 1.0.13d1",
// "com.apple.iokit.IOGraphicsFamily 2.4.1",
// "com.apple.driver.AppleSMC 3.1.9",
// "com.apple.driver.AppleUSBMultitouch 245.2",
// "com.apple.iokit.IOUSBHIDDriver 705.4.0",
// "com.apple.driver.CoreStorage 471.10.6",
// "com.apple.iokit.IOSCSIBlockCommandsDevice 3.7.3",
// "com.apple.iokit.IOUSBMassStorageClass 3.7.1",
// "com.apple.driver.AppleUSBMergeNub 705.4.0",
// "com.apple.driver.AppleUSBComposite 705.4.9",
// "com.apple.iokit.IOSCSIMultimediaCommandsDevice 3.7.3",
// "com.apple.iokit.IOBDStorageFamily 1.7",
// "com.apple.iokit.IODVDStorageFamily 1.7.1",
// "com.apple.iokit.IOCDStorageFamily 1.7.1",
// "com.apple.iokit.IOAHCISerialATAPI 2.6.1",
// "com.apple.iokit.IOSCSIArchitectureModelFamily 3.7.3",
// "com.apple.iokit.IOFireWireFamily 4.5.6",
// "com.apple.iokit.IOEthernetAVBController 1.0.3b3",
// "com.apple.iokit.IO80211Family 710.55",
// "com.apple.driver.mDNSOffloadUserClient 1.0.1b8",
// "com.apple.iokit.IONetworkingFamily 3.2",
// "com.apple.iokit.IOAHCIFamily 2.7.5",
// "com.apple.iokit.IOUSBFamily 710.4.14",
// "com.apple.driver.AppleEFINVRAM 2.0",
// "com.apple.driver.AppleEFIRuntime 2.0",
// "com.apple.iokit.IOHIDFamily 2.0.0",
// "com.apple.iokit.IOSMBusFamily 1.1",
// "com.apple.security.sandbox 300.0",
// "com.apple.kext.AppleMatch 1.0.0d1",
// "com.apple.driver.AppleKeyStore 2",
// "com.apple.driver.AppleMobileFileIntegrity 1.0.5",
"com.apple.driver.AppleCredentialManager 1.0",
"com.apple.driver.DiskImages 396",
"com.apple.iokit.IOStorageFamily 2.0",
"com.apple.iokit.IOReportFamily 31",
"com.apple.driver.AppleFDEKeyStore 28.30",
"com.apple.driver.AppleACPIPlatform 3.1",
"com.apple.iokit.IOPCIFamily 2.9",
"com.apple.iokit.IOACPIFamily 1.4",
"com.apple.kec.corecrypto 1.0",
"com.apple.kec.Libm 1",
"com.apple.kec.pthread 1",
"Model: MacBookPro6,2, BootROM MBP61.0057.B0C, 2 processors, Intel Core i7, 2.66 GHz, 4 GB, SMC 1.58f17",
"Graphics: Intel HD Graphics, Intel HD Graphics, Built-In, 288 MB",
"Graphics: NVIDIA GeForce GT 330M, NVIDIA GeForce GT 330M, PCIe, 512 MB",
"Memory Module: BANK 0/DIMM0, 2 GB, DDR3, 1067 MHz, 0x802C, 0x31364A53463235363634485A2D3147314631",
"Memory Module: BANK 1/DIMM0, 2 GB, DDR3, 1067 MHz, 0x802C, 0x31364A53463235363634485A2D3147314631",
"AirPort: spairport_wireless_card_type_airport_extreme (0x14E4, 0x93), Broadcom BCM43xx 1.0 (5.106.98.100.24)",
"Bluetooth: Version 4.3.2f6 15235, 3 services, 27 devices, 1 incoming serial ports",
"Network Service: Wi-Fi, AirPort, en1",
"Serial ATA Device: ST9500420ASG, 500.11 GB",
"Serial ATA Device: HL-DT-ST DVDRW  GS23N",
"USB Device: Hub",
"USB Device: USB2.0 Hub",
"USB Device: BRCM2070 Hub",
"USB Device: Bluetooth USB Host Controller",
"USB Device: Internal Memory Card Reader",
"USB Device: Apple Internal Keyboard / Trackpad",
"USB Device: Hub",
"USB Device: USB Receiver",
"USB Device: Built-in iSight",
"USB Device: IR Receiver",
"Reinstalling System",
"Loading",
""];