// Classic Biglinux theme

var panel = new Panel;
panel.location = "bottom";
panel.alignment = "left";
panel.height = Math.round(gridUnit * 2.3);

var menu = panel.addWidget("org.kde.plasma.kicker");
menu.writeConfig("icon","big-favicon-classic");

var browser = panel.addWidget("org.kde.plasma.icon");
browser.currentConfigGroup = ["Configuration", "General"];
browser.writeConfig("localPath","$HOME/.local/share/plasma_icons/brave-browser.desktop");
browser.writeConfig("url","file:///usr/share/applications/brave-browser.desktop");

var dolphin = panel.addWidget("org.kde.plasma.icon");
dolphin.currentConfigGroup = ["Configuration", "General"];
dolphin.writeConfig("localPath","$HOME/.local/share/plasma_icons/org.kde.dolphin.desktop");
dolphin.writeConfig("url","file:///usr/share/applications/org.kde.dolphin.desktop");


panel.addWidget("org.kde.plasma.minimizeall");

var tasks = panel.addWidget("org.kde.plasma.taskmanager");
tasks.currentConfigGroup = ["Configuration", "General"];
tasks.writeConfig("showOnlyCurrentScreen", true);
tasks.writeConfig("maxStripes", 2);
tasks.writeConfig("launchers", "");

var presentwindows = panel.addWidget("com.github.zren.presentwindows");
presentwindows.currentConfigGroup = ["Configuration", "General"];
presentwindows.writeConfig("icon", "mission-control");
presentwindows.writeConfig("clickCommand", "Overview");

panel.addWidget("org.kde.plasma.systemtray");

var clock = panel.addWidget("org.kde.plasma.eventcalendar");
clock.currentConfigGroup = ["Configuration", "General"];
clock.writeConfig("widgetShowMeteogram", false);
clock.writeConfig("clockShowLine2", true);
clock.writeConfig("twoColumns", false);
clock.writeConfig("monthHeightSingleColumn", "350");

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
}
