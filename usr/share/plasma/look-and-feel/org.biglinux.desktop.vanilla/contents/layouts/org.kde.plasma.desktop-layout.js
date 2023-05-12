// KDE Neon default layout like for biglinux

var panel = new Panel
panel.location = "bottom";
panel.alignment = "left";
panel.height = Math.round(gridUnit * 2);

panel.addWidget("org.kde.plasma.kickoff");

var pager = panel.addWidget("org.kde.plasma.pager");
pager.currentConfigGroup = ["Configuration", "General"];
pager.writeConfig("showOnlyCurrentScreen", true);

var tasks = panel.addWidget("org.kde.plasma.icontasks");
tasks.currentConfigGroup = ["Configuration", "General"];
tasks.writeConfig("showOnlyCurrentScreen", true);
tasks.writeConfig("launchers", ["applications:bigcontrolcenter.desktop","applications:big-store.desktop", "preferred://filemanager", "preferred://browser", "applications:bigtts.desktop"]);
tasks.writeConfig("maxStripes", "1");
panel.addWidget("org.kde.plasma.systemtray");
panel.addWidget("org.kde.plasma.digitalclock");
panel.addWidget("org.kde.plasma.minimizeall");

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
}
