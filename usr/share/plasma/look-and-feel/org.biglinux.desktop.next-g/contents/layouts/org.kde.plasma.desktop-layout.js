// Next-G Biglinux theme

//Top Panel
var topPanel = new Panel;
topPanel.location = "top";
topPanel.alignment = "left";
topPanel.height = Math.round(gridUnit * 1.5);

topPanel.addWidget("org.kde.plasma.win7showdesktop");

var title = topPanel.addWidget("org.kde.windowtitle");
title.currentConfigGroup = ["Configuration", "General"];
title.writeConfig("filterByScreen", true);
title.writeConfig("style", 4);

topPanel.addWidget("org.kde.windowappmenu");
topPanel.addWidget("org.kde.plasma.panelspacer");

var systemtray = topPanel.addWidget("org.kde.plasma.systemtray");
systemtray.currentConfigGroup = ["Configuration", "General"];
systemtray.writeConfig("iconSpacing", 9);

var clock = topPanel.addWidget("org.kde.plasma.eventcalendar");
clock.currentConfigGroup = ["Configuration", "General"];
clock.writeConfig("widgetShowMeteogram", false);
clock.writeConfig("twoColumns", false);
clock.writeConfig("monthHeightSingleColumn", "350");
clock.writeConfig("clockTimeFormat1", "dd MMM hh:mm")

var wbuttons = topPanel.addWidget("org.kde.windowbuttons");
wbuttons.currentConfigGroup = ["Configuration", "General"];
wbuttons.writeConfig("buttons", "3|4|5|10|2|9" );
wbuttons.writeConfig("containmentType", "Plasma");
wbuttons.writeConfig("visibility", 2);


//bottom Panel
var bottomPanel = new Panel;
bottomPanel.location = "bottom";
bottomPanel.alignment = "center";
bottomPanel.hiding = "windowscover";
bottomPanel.height = Math.round(gridUnit * 2.3);
bottomPanel.maximumLength = Math.round(gridUnit * 100);
bottomPanel.minimumLength = Math.round(gridUnit * 2);

var menu = bottomPanel.addWidget("org.biglinux.appsmenu");
menu.writeConfig("icon","big-favicon-nextg");

var presentwindows = bottomPanel.addWidget("com.github.zren.presentwindows");
presentwindows.currentConfigGroup = ["Configuration", "General"];
presentwindows.writeConfig("icon", "mission-control");
presentwindows.writeConfig("clickCommand", "Overview");

var tasks = bottomPanel.addWidget("org.kde.plasma.icontasks");
tasks.currentConfigGroup = ["Configuration", "General"];
tasks.writeConfig("showOnlyCurrentScreen", true);
tasks.writeConfig("launchers", ["preferred://browser", "preferred://filemanager", "applications:org.gnome.Calculator.desktop", "applications:libreoffice-writer.desktop", "applications:org.kde.kate.desktop", "applications:bigtts.desktop"]);
tasks.writeConfig("maxStripes", 1);
tasks.writeConfig("showToolTips", false);
tasks.writeConfig("groupedTaskVisualization", 2);
tasks.writeConfig("forceStripes", true);

bottomPanel.addWidget("org.kde.plasma.trash");


var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
}

