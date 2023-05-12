// Gnome 2 like panel layout - Aesthetic Modern layout theme

// Top Panel
var topPanel = new Panel
topPanel.location = "top";
topPanel.height = Math.round(gridUnit * 1.5);

topPanel.addWidget("org.biglinux.appsmenu");

var browser = topPanel.addWidget("org.kde.plasma.icon");
browser.currentConfigGroup = ["Configuration", "General"];
browser.writeConfig("localPath","$HOME/.local/share/plasma_icons/brave-browser.desktop");
browser.writeConfig("url","file:///usr/share/applications/brave-browser.desktop");

var dolphin = topPanel.addWidget("org.kde.plasma.icon");
dolphin.currentConfigGroup = ["Configuration", "General"];
dolphin.writeConfig("localPath","$HOME/.local/share/plasma_icons/org.kde.dolphin.desktop");
dolphin.writeConfig("url","file:///usr/share/applications/org.kde.dolphin.desktop");

var calculator = topPanel.addWidget("org.kde.plasma.icon");
calculator.currentConfigGroup = ["Configuration", "General"];
calculator.writeConfig("localPath","$HOME/.local/share/plasma_icons/org.gnome.Calculator.desktop");
calculator.writeConfig("url","file:///usr/share/applications/org.gnome.Calculator.desktop");

var libre_writer = topPanel.addWidget("org.kde.plasma.icon");
libre_writer.currentConfigGroup = ["Configuration", "General"];
libre_writer.writeConfig("localPath","$HOME/.local/share/plasma_icons/libreoffice-writer.desktop");
libre_writer.writeConfig("url","file:///usr/share/applications/libreoffice-writer.desktop");

var kate = topPanel.addWidget("org.kde.plasma.icon");
kate.currentConfigGroup = ["Configuration", "General"];
kate.writeConfig("localPath","$HOME/.local/share/plasma_icons/org.kde.kate.desktop");
kate.writeConfig("url","file:///usr/share/applications/org.kde.kate.desktop");

var tts = topPanel.addWidget("org.kde.plasma.icon");
tts.currentConfigGroup = ["Configuration", "General"];
tts.writeConfig("localPath","$HOME/.local/share/plasma_icons/bigtts.desktop");
tts.writeConfig("url","file:///usr/share/applications/bigtts.desktop");

topPanel.addWidget("org.kde.plasma.panelspacer");

var lock_logout = topPanel.addWidget("org.kde.plasma.lock_logout");
lock_logout.currentConfigGroup = ["Configuration", "General"];
lock_logout.writeConfig("show_requestLogout", true);
lock_logout.writeConfig("show_requestShutDown", true);
lock_logout.writeConfig("show_requestReboot", true);
lock_logout.writeConfig("show_lockScreen", false);

// Bottom Panel
var bottomPanel = new Panel
bottomPanel.location = "bottom";
bottomPanel.height = Math.round(gridUnit * 2.2);
bottomPanel.alignment = "left";
bottomPanel.hiding = "windowscover"

var tasks = bottomPanel.addWidget("org.kde.plasma.taskmanager");
tasks.currentConfigGroup = ["Configuration", "General"];
tasks.writeConfig("showOnlyCurrentScreen", true);
tasks.writeConfig("launchers", "");

var presentwindows = bottomPanel.addWidget("com.github.zren.presentwindows");
presentwindows.currentConfigGroup = ["Configuration", "General"];
presentwindows.writeConfig("icon", "mission-control");
presentwindows.writeConfig("clickCommand", "Overview");

bottomPanel.addWidget("org.kde.milou");

var clock = bottomPanel.addWidget("org.kde.plasma.eventcalendar");
clock.currentConfigGroup = ["Configuration", "General"];
clock.writeConfig("clockShowLine2", true);

bottomPanel.addWidget("org.kde.plasma.systemtray");

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
}
