// moderna layout theme

// Top Panel
var topPanel = new Panel
topPanel.location = "top";
topPanel.alignment = "center";
topPanel.height = Math.round(gridUnit * 1.8);
topPanel.maximumLength = Math.round(gridUnit * 100);
topPanel.minimumLength = Math.round(gridUnit * 5);
topPanel.hiding = "windowscover";

var clock = topPanel.addWidget("org.kde.plasma.eventcalendar");
clock.currentConfigGroup = ["Configuration", "General"];
clock.writeConfig("widgetShowMeteogram", false);
clock.writeConfig("twoColumns", false);
clock.writeConfig("monthHeightSingleColumn", "350");
clock.writeConfig("clockTimeFormat1", "dd MMM hh:mm")

// Top left Panel
var leftTopPanel = new Panel
leftTopPanel.location = "left";
leftTopPanel.alignment = "left";
leftTopPanel.height = Math.round(gridUnit * 2);
leftTopPanel.maximumLength = Math.round(gridUnit * 100);
leftTopPanel.minimumLength = Math.round(gridUnit * 2);
leftTopPanel.hiding = "windowscover";

leftTopPanel.addWidget("org.biglinux.appsmenu");

var lock_logout = leftTopPanel.addWidget("org.kde.plasma.lock_logout");
lock_logout.currentConfigGroup = ["Configuration", "General"];
lock_logout.writeConfig("show_requestLogout", true);
lock_logout.writeConfig("show_requestShutDown", true);
lock_logout.writeConfig("show_requestReboot", true);
lock_logout.writeConfig("show_lockScreen", false);

leftTopPanel.addWidget("org.kde.plasma.systemtray");


// Bottom Panel
var bottomPanel = new Panel
bottomPanel.location = "bottom";
bottomPanel.height = Math.round(gridUnit * 2.5);
bottomPanel.alignment = "center";
bottomPanel.maximumLength = Math.round(gridUnit * 100);
bottomPanel.minimumLength = Math.round(gridUnit * 2);
bottomPanel.hiding = "windowscover"

var tasks = bottomPanel.addWidget("org.kde.plasma.icontasks");
tasks.currentConfigGroup = ["Configuration", "General"];
tasks.writeConfig("showOnlyCurrentScreen", true);
tasks.writeConfig("launchers", ["preferred://browser", "preferred://filemanager", "applications:org.gnome.Calculator.desktop", "applications:libreoffice-writer.desktop", "applications:org.kde.kate.desktop", "applications:bigtts.desktop"]);
tasks.writeConfig("maxStripes", 1);
tasks.writeConfig("showToolTips", false);
tasks.writeConfig("groupedTaskVisualization", 2);
tasks.writeConfig("forceStripes", true);

var presentwindows = bottomPanel.addWidget("com.github.zren.presentwindows");
presentwindows.currentConfigGroup = ["Configuration", "General"];
presentwindows.writeConfig("icon", "mission-control");
presentwindows.writeConfig("clickCommand", "Overview");

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
}
