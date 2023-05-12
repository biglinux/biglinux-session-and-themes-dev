// Unity Biglinux theme

//Top Panel
var topPanel = new Panel;
topPanel.location = "top";
topPanel.alignment = "left";
topPanel.height = Math.round(gridUnit * 1.8);

var wbuttons = topPanel.addWidget("org.kde.windowbuttons");
wbuttons.currentConfigGroup = ["Configuration", "General"];
wbuttons.writeConfig("buttons", "5|3|4|10|2|9" );
wbuttons.writeConfig("containmentType", "Plasma");
wbuttons.writeConfig("visibility", 2);

var title = topPanel.addWidget("org.kde.windowtitle");
title.currentConfigGroup = ["Configuration", "General"];
title.writeConfig("filterByScreen", true);
title.writeConfig("style", 4);


topPanel.addWidget("org.kde.windowappmenu");
topPanel.addWidget("org.kde.plasma.panelspacer");

var presentwindows = topPanel.addWidget("com.github.zren.presentwindows");
presentwindows.currentConfigGroup = ["Configuration", "General"];
presentwindows.writeConfig("icon", "mission-control");
presentwindows.writeConfig("clickCommand", "Overview");

topPanel.addWidget("org.kde.plasma.systemtray");

var clock = topPanel.addWidget("org.kde.plasma.eventcalendar");
clock.currentConfigGroup = ["Configuration", "General"];
clock.writeConfig("widgetShowMeteogram", false);
clock.writeConfig("clockShowLine2", true);
clock.writeConfig("twoColumns", false);
clock.writeConfig("monthHeightSingleColumn", "350");

topPanel.addWidget("org.kde.plasma.win7showdesktop");

//Left Panel
var leftPanel = new Panel;
leftPanel.location = "left";
leftPanel.alignment = "left";
leftPanel.height = Math.round(gridUnit * 2.3);
leftPanel.offset = Math.round(topPanel.height - 4);

var menu = leftPanel.addWidget("org.biglinux.appsmenu");
menu.writeConfig("icon","big-favicon-kunity");

var tasks = leftPanel.addWidget("org.kde.plasma.icontasks");
tasks.currentConfigGroup = ["Configuration", "General"];
tasks.writeConfig("showOnlyCurrentScreen", true);
tasks.writeConfig("launchers", ["preferred://browser", "preferred://filemanager", "applications:org.gnome.Calculator.desktop", "applications:libreoffice-writer.desktop", "applications:org.kde.kate.desktop", "applications:bigtts.desktop"]);
tasks.writeConfig("maxStripes", 1);
tasks.writeConfig("showToolTips", false);
tasks.writeConfig("groupedTaskVisualization", 2);
tasks.writeConfig("forceStripes", true);

leftPanel.addWidget("org.kde.plasma.trash");

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
}
