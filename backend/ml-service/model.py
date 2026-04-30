def check(event):
    if "failed" in event.lower() or "unauthorized" in event.lower():
        return "anomaly"
    return "normal"
